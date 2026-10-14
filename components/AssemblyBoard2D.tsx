"use client";

import {
  componentById,
  connections,
  hardware,
  pinById,
  powerJunctions,
  type AssemblyConnection,
  type PinSide,
} from "@/lib/assembly-data";

type Props = {
  selectedConnectionId: string | null;
  hoveredConnectionId: string | null;
  onSelectConnection: (id: string) => void;
  onHoverConnection: (id: string | null) => void;
  activePinKeys: string[];
};

function edgePosition(
  side: PinSide,
  index: number,
  count: number,
  component: ReturnType<typeof componentById>,
) {
  const alongX =
    component.map.x + ((index + 1) * component.map.width) / (count + 1);
  const alongY =
    component.map.y + ((index + 1) * component.map.height) / (count + 1);
  if (side === "left") return { x: component.map.x - 9, y: alongY };
  if (side === "right")
    return { x: component.map.x + component.map.width + 9, y: alongY };
  if (side === "top") return { x: alongX, y: component.map.y - 9 };
  return { x: alongX, y: component.map.y + component.map.height + 9 };
}

function pinPosition(
  componentId: AssemblyConnection["source"]["componentId"],
  pinId: string,
) {
  const component = componentById(componentId);
  const pin = pinById(componentId, pinId);
  return edgePosition(
    pin.side,
    pin.index,
    component.pins.filter((entry) => entry.side === pin.side).length,
    component,
  );
}

function pathFor(connection: AssemblyConnection, index: number) {
  const from = pinPosition(
    connection.source.componentId,
    connection.source.pinId,
  );
  const to = pinPosition(
    connection.target.componentId,
    connection.target.pinId,
  );
  const junction = connection.junctionId
    ? powerJunctions.find((entry) => entry.id === connection.junctionId)
    : undefined;
  if (junction) {
    const targetsLevel = connection.target.componentId === "level";
    if (targetsLevel) {
      const level = componentById("level");
      const outsideX = level.map.x - 28;
      const outsideY = to.y + 24;
      return `M ${from.x} ${from.y} L ${junction.mapPosition[0]} ${junction.mapPosition[1]} L ${outsideX} ${junction.mapPosition[1]} L ${outsideX} ${outsideY} L ${to.x} ${outsideY} L ${to.x} ${to.y}`;
    }
    return `M ${from.x} ${from.y} L ${junction.mapPosition[0]} ${junction.mapPosition[1]} L ${to.x} ${to.y}`;
  }
  const lane = index < 8 ? 94 + index * 17 : 505 + (index - 8) * 23;
  const inFrom = from.y > lane ? -1 : 1;
  const inTo = to.y > lane ? -1 : 1;
  return `M ${from.x} ${from.y} C ${from.x} ${from.y + inFrom * 42}, ${from.x + (to.x - from.x) * 0.2} ${lane}, ${from.x + (to.x - from.x) * 0.5} ${lane} S ${to.x} ${to.y - inTo * 42}, ${to.x} ${to.y}`;
}

function PinLabels({
  componentId,
}: {
  componentId: AssemblyConnection["source"]["componentId"];
}) {
  const component = componentById(componentId);
  return (
    <>
      {component.pins.map((pin) => {
        const position = pinPosition(component.id, pin.id);
        const horizontal = pin.side === "left" || pin.side === "right";
        const diagonalLoraLabel =
          component.id === "lora" && pin.side === "bottom";
        const anchor =
          pin.side === "left"
            ? "end"
            : pin.side === "right"
              ? "start"
              : "middle";
        const labelX =
          pin.side === "left"
            ? position.x - 15
            : pin.side === "right"
              ? position.x + 15
              : position.x;
        const labelY =
          pin.side === "top"
            ? position.y - 10
            : pin.side === "bottom"
              ? position.y + (diagonalLoraLabel ? 30 : 18)
              : position.y + 3;
        return (
          <g
            key={pin.id}
            className={`map-pin ${pin.contact === "castellated-pad" ? "castellated-pad" : ""}`}
          >
            {pin.contact === "castellated-pad" ? (
              <rect
                x={position.x - 7}
                y={position.y - 4}
                width="14"
                height="8"
                rx="2"
              />
            ) : (
              <>
                <circle cx={position.x} cy={position.y} r="8.4" />
                <circle
                  className="pin-hole"
                  cx={position.x}
                  cy={position.y}
                  r="3.2"
                />
              </>
            )}
            <text
              x={labelX}
              y={labelY}
              textAnchor={diagonalLoraLabel ? "end" : anchor}
              transform={
                diagonalLoraLabel
                  ? `rotate(-55 ${labelX} ${labelY})`
                  : undefined
              }
              className={horizontal ? "" : "vertical-label"}
            >
              {pin.label}
            </text>
          </g>
        );
      })}
    </>
  );
}

export default function AssemblyBoard2D({
  selectedConnectionId,
  hoveredConnectionId,
  onSelectConnection,
  onHoverConnection,
  activePinKeys,
}: Props) {
  const selected = connections.find(
    (connection) => connection.id === selectedConnectionId,
  );
  return (
    <section className="assembly-board" aria-label="Vista superior da montagem">
      <div className="assembly-map-toolbar">
        <span>
          <i className="status-dot" /> VISTA SUPERIOR · TERMINAIS DA SERIGRAFIA
        </span>
        <span>
          Clique num fio para selecionar · zoom do navegador para leitura
        </span>
      </div>
      <svg
        className="assembly-map"
        viewBox="0 0 1140 790"
        role="img"
        aria-label="Diagrama de montagem com 16 conexões físicas e terminais identificados"
      >
        <defs>
          <filter
            id="connector-glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect
          x="1"
          y="1"
          width="1138"
          height="788"
          rx="16"
          className="map-surface"
        />
        <g className="map-grid">
          {Array.from({ length: 28 }, (_, index) => (
            <line
              key={`v-${index}`}
              x1={index * 44}
              y1="0"
              x2={index * 44}
              y2="790"
            />
          ))}
          {Array.from({ length: 20 }, (_, index) => (
            <line
              key={`h-${index}`}
              x1="0"
              y1={index * 44}
              x2="1140"
              y2={index * 44}
            />
          ))}
        </g>
        <g className="connection-layer">
          {connections.map((connection, index) => {
            const isSelected = connection.id === selectedConnectionId;
            const isHovered = connection.id === hoveredConnectionId;
            const isDimmed = Boolean(selected && !isSelected && !isHovered);
            const d = pathFor(connection, index);
            return (
              <g
                key={connection.id}
                className={`map-connection ${isSelected ? "selected" : ""} ${isHovered ? "hovered" : ""} ${isDimmed ? "dimmed" : ""}`}
                onMouseEnter={() => onHoverConnection(connection.id)}
                onMouseLeave={() => onHoverConnection(null)}
                onClick={() => onSelectConnection(connection.id)}
              >
                <path d={d} stroke={connection.color} />
                <path className="connection-hit" d={d} />
              </g>
            );
          })}
        </g>
        <g className="junction-layer">
          {powerJunctions.map((junction) => (
            <g key={junction.id} className="map-junction">
              <circle
                cx={junction.mapPosition[0]}
                cy={junction.mapPosition[1]}
                r="12"
                fill={
                  connections.find(
                    (entry) => entry.category === junction.category,
                  )?.color
                }
              />
              <circle
                cx={junction.mapPosition[0]}
                cy={junction.mapPosition[1]}
                r="4"
              />
              <text
                x={junction.mapPosition[0]}
                y={junction.mapPosition[1] - 19}
              >
                {junction.label} · SOLDA
              </text>
            </g>
          ))}
        </g>
        {hardware.map((component) => (
          <g key={component.id} className="map-component">
            <rect
              className="board-shadow"
              x={component.map.x + 7}
              y={component.map.y + 9}
              width={component.map.width}
              height={component.map.height}
              rx="10"
            />
            <rect
              className="board-body"
              x={component.map.x}
              y={component.map.y}
              width={component.map.width}
              height={component.map.height}
              rx="10"
              fill={component.boardColor}
            />
            <rect
              className="board-inset"
              x={component.map.x + 10}
              y={component.map.y + 10}
              width={component.map.width - 20}
              height={component.map.height - 20}
              rx="6"
            />
            <text
              className="board-name"
              x={component.map.x + component.map.width / 2}
              y={component.map.y + 28}
            >
              {component.shortName}
            </text>
            {component.id === "esp32" && (
              <>
                <rect
                  className="usb-port"
                  x={component.map.x + component.map.width / 2 - 31}
                  y={component.map.y + 7}
                  width="62"
                  height="20"
                  rx="4"
                />
                <text
                  className="board-subtitle"
                  x={component.map.x + component.map.width / 2}
                  y={component.map.y + 54}
                >
                  USB-C ↑
                </text>
                <rect
                  className="chip"
                  x={component.map.x + 50}
                  y={component.map.y + 88}
                  width="80"
                  height="73"
                  rx="4"
                />
                <text
                  className="chip-text"
                  x={component.map.x + 90}
                  y={component.map.y + 130}
                >
                  ESP32-C3
                </text>
              </>
            )}
            {component.id === "lora" && (
              <>
                <rect
                  className="chip"
                  x={component.map.x + 51}
                  y={component.map.y + 57}
                  width="88"
                  height="66"
                  rx="4"
                />
                <text
                  className="chip-text"
                  x={component.map.x + 95}
                  y={component.map.y + 96}
                >
                  SX1278
                </text>
                <path
                  className="antenna-2d"
                  d={`M ${component.map.x + component.map.width - 20} ${component.map.y + 22} c 18 -12 -10 -21 7 -31 c 18 -12 -10 -21 7 -31 c 18 -12 -10 -21 7 -31`}
                />
                <text
                  className="antenna-label"
                  x={component.map.x + component.map.width - 26}
                  y={component.map.y + 42}
                >
                  ANT
                </text>
              </>
            )}
            {component.id === "sensor" && (
              <>
                <rect
                  className="connector-2d"
                  x={component.map.x + 88}
                  y={component.map.y + 38}
                  width="65"
                  height="34"
                  rx="5"
                />
                <text
                  className="board-subtitle"
                  x={component.map.x + component.map.width / 2}
                  y={component.map.y + 101}
                >
                  CONTROLADOR
                </text>
              </>
            )}
            {component.id === "level" && (
              <>
                <rect
                  className="chip"
                  x={component.map.x + 83}
                  y={component.map.y + 42}
                  width="64"
                  height="44"
                  rx="4"
                />
                <text
                  className="level-text"
                  x={component.map.x + component.map.width / 2}
                  y={component.map.y + 110}
                >
                  HV ⇄ LV · 4 CANAIS
                </text>
              </>
            )}
            <PinLabels componentId={component.id} />
          </g>
        ))}
        {activePinKeys.map((key) => {
          const [componentId, pinId] = key.split(":") as [
            AssemblyConnection["source"]["componentId"],
            string,
          ];
          const position = pinPosition(componentId, pinId);
          return (
            <circle
              key={key}
              className="active-pin-ring"
              cx={position.x}
              cy={position.y}
              r="13"
            />
          );
        })}
      </svg>
    </section>
  );
}
