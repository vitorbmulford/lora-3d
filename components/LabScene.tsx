"use client";

import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from "three";
import {
  componentById,
  connections,
  hardware,
  powerJunctions,
  worldPinPosition,
  type HardwareComponent,
  type PinContact,
} from "@/lib/assembly-data";

type Vec3 = [number, number, number];

function Silk({
  children,
  position,
  size = 0.075,
  color = "#e4dbbc",
  rotation = [-Math.PI / 2, 0, 0],
}: {
  children: string;
  position: Vec3;
  size?: number;
  color?: string;
  rotation?: Vec3;
}) {
  return (
    <Text
      position={position}
      rotation={rotation}
      fontSize={size}
      color={color}
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.0018}
      outlineColor="#0b1111"
      renderOrder={3}
      material-depthTest={false}
    >
      {children}
    </Text>
  );
}

function Pin({
  position,
  active,
  label,
  contact,
  side,
}: {
  position: Vec3;
  active: boolean;
  label: string;
  contact: PinContact;
  side: HardwareComponent["pins"][number]["side"];
}) {
  const labelPosition: Vec3 =
    side === "left"
      ? [-0.19, 0.27, 0]
      : side === "right"
        ? [0.19, 0.27, 0]
        : side === "top"
          ? [0, 0.27, -0.17]
          : [0, 0.27, 0.17];
  const verticalLabel = contact === "castellated-pad" && side === "bottom";
  const labelRotation: Vec3 = verticalLabel
    ? [-Math.PI / 2, 0, Math.PI / 2]
    : [-Math.PI / 2, 0, 0];
  const labelSize = contact === "castellated-pad" ? 0.042 : 0.055;
  const labelColor = active ? "#ffe0a2" : "#f4ecd0";
  if (contact === "castellated-pad")
    return (
      <group position={position}>
        <mesh position={[0, 0.025, 0]}>
          <boxGeometry args={[0.1, 0.025, 0.1]} />
          <meshStandardMaterial
            color={active ? "#f1bd51" : "#d3b45d"}
            metalness={0.8}
            roughness={0.22}
          />
        </mesh>
        {active && (
          <mesh position={[0, 0.07, 0]}>
            <sphereGeometry args={[0.052, 16, 12]} />
            <meshStandardMaterial
              color="#f1bd51"
              emissive="#d87b27"
              emissiveIntensity={1.55}
            />
          </mesh>
        )}
        <Silk
          position={labelPosition}
          size={labelSize}
          color={labelColor}
          rotation={labelRotation}
        >
          {label}
        </Silk>
      </group>
    );
  return (
    <group position={position}>
      <mesh position={[0, 0.04, 0]}>
        <boxGeometry args={[0.13, 0.045, 0.13]} />
        <meshStandardMaterial
          color={active ? "#dfaa45" : "#202020"}
          roughness={0.55}
        />
      </mesh>
      <mesh position={[0, 0.12, 0]} castShadow>
        <boxGeometry args={[0.045, 0.17, 0.045]} />
        <meshStandardMaterial
          color="#cdd4d4"
          metalness={0.9}
          roughness={0.18}
        />
      </mesh>
      {active && (
        <mesh position={[0, 0.215, 0]}>
          <sphereGeometry args={[0.056, 16, 12]} />
          <meshStandardMaterial
            color="#f1bd51"
            emissive="#d87b27"
            emissiveIntensity={1.55}
          />
        </mesh>
      )}
      <Silk position={labelPosition} size={labelSize} color={labelColor}>
        {label}
      </Silk>
    </group>
  );
}

function Board({
  component,
  activePins,
  children,
}: {
  component: HardwareComponent;
  activePins: Set<string>;
  children: React.ReactNode;
}) {
  const boardSize = component.threeSize;
  return (
    <group position={component.worldPosition}>
      <mesh castShadow receiveShadow position={[0, 0.025, 0]}>
        <boxGeometry args={[boardSize[0], 0.055, boardSize[1]]} />
        <meshStandardMaterial
          color={component.boardColor}
          roughness={0.47}
          metalness={0.15}
        />
      </mesh>
      <mesh position={[0, 0.058, 0]}>
        <boxGeometry args={[boardSize[0] - 0.04, 0.01, boardSize[1] - 0.04]} />
        <meshStandardMaterial color={component.boardColor} roughness={0.6} />
      </mesh>
      {children}
      {component.pins.map((pin) => (
        <Pin
          key={pin.id}
          position={pin.local3d}
          label={pin.label}
          side={pin.side}
          contact={pin.contact}
          active={activePins.has(`${component.id}:${pin.id}`)}
        />
      ))}
    </group>
  );
}

function Chip({
  position,
  size,
  label,
}: {
  position: Vec3;
  size: [number, number, number];
  label?: string;
}) {
  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial
          color="#202426"
          roughness={0.38}
          metalness={0.26}
        />
      </mesh>
      {label && (
        <Silk
          position={[0, size[1] / 2 + 0.005, 0]}
          size={0.055}
          color="#87918f"
        >
          {label}
        </Silk>
      )}
    </group>
  );
}

function Esp32Model({
  component,
  activePins,
}: {
  component: HardwareComponent;
  activePins: Set<string>;
}) {
  return (
    <Board component={component} activePins={activePins}>
      <group position={[0, 0.12, -0.78]}>
        <mesh castShadow>
          <boxGeometry args={[0.58, 0.2, 0.32]} />
          <meshStandardMaterial
            color="#bbc6c9"
            metalness={0.9}
            roughness={0.19}
          />
        </mesh>
        <mesh position={[0, 0, -0.165]}>
          <boxGeometry args={[0.43, 0.1, 0.016]} />
          <meshStandardMaterial color="#171a1b" />
        </mesh>
        <mesh position={[0, 0.006, -0.177]}>
          <boxGeometry args={[0.22, 0.022, 0.014]} />
          <meshStandardMaterial color="#d8bd82" metalness={0.75} />
        </mesh>
      </group>
      <Chip
        position={[0, 0.13, -0.14]}
        size={[0.55, 0.12, 0.55]}
        label="ESP32"
      />
      <Chip position={[-0.46, 0.1, 0.3]} size={[0.13, 0.05, 0.13]} />
      <Chip position={[0.44, 0.1, 0.3]} size={[0.13, 0.05, 0.13]} />
      <mesh position={[0, 0.08, 0.77]}>
        <boxGeometry args={[0.83, 0.026, 0.22]} />
        <meshStandardMaterial color="#e8dfbe" roughness={0.62} />
      </mesh>
      <Silk position={[0, 0.1, 0.73]} size={0.09}>
        ESP32-C3
      </Silk>
      <Silk position={[0, 0.1, 0.57]} size={0.06} color="#91a9a3">
        SUPER MINI
      </Silk>
      <Silk position={[0, 0.29, -0.98]} size={0.055} color="#d7e5df">
        USB-C · ENTRADA 5V
      </Silk>
    </Board>
  );
}

function SpringAntenna() {
  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let index = 0; index < 96; index += 1) {
      const t = index / 95;
      const a = t * Math.PI * 15;
      points.push(
        new THREE.Vector3(
          Math.cos(a) * 0.12,
          0.16 + t * 1.52,
          Math.sin(a) * 0.12,
        ),
      );
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);
  return (
    <group position={[0.69, 0, -0.66]}>
      <mesh castShadow>
        <tubeGeometry args={[curve, 96, 0.022, 9, false]} />
        <meshStandardMaterial
          color="#e2e8e7"
          metalness={0.93}
          roughness={0.16}
        />
      </mesh>
    </group>
  );
}

function LoraModel({
  component,
  activePins,
}: {
  component: HardwareComponent;
  activePins: Set<string>;
}) {
  return (
    <Board component={component} activePins={activePins}>
      <Chip
        position={[0.05, 0.13, 0.08]}
        size={[0.55, 0.11, 0.56]}
        label="SX1278"
      />
      <Chip position={[0.42, 0.1, -0.42]} size={[0.26, 0.045, 0.13]} />
      <Chip position={[-0.36, 0.1, -0.5]} size={[0.18, 0.05, 0.1]} />
      <mesh position={[0, 0.08, -0.89]}>
        <cylinderGeometry args={[0.11, 0.11, 0.06, 16]} />
        <meshStandardMaterial color="#d9d2aa" metalness={0.66} />
      </mesh>
      <SpringAntenna />
      <Silk position={[0, 0.09, 0.84]} size={0.065} color="#dce9e8">
        Ra-02 · 433 MHz
      </Silk>
    </Board>
  );
}

function SensorCable() {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(1.92, 0.19, -0.55),
        new THREE.Vector3(2.25, 0.45, -0.64),
        new THREE.Vector3(2.62, 0.38, -0.82),
        new THREE.Vector3(3.05, 0.12, -0.58),
      ]),
    [],
  );
  return (
    <mesh castShadow>
      <tubeGeometry args={[curve, 48, 0.045, 10, false]} />
      <meshStandardMaterial color="#171b1d" roughness={0.62} />
    </mesh>
  );
}

function SensorModel({
  component,
  activePins,
}: {
  component: HardwareComponent;
  activePins: Set<string>;
}) {
  return (
    <>
      <Board component={component} activePins={activePins}>
        <group position={[-0.42, 0.12, -0.26]}>
          <mesh castShadow>
            <boxGeometry args={[0.38, 0.16, 0.26]} />
            <meshStandardMaterial color="#e3e3dc" roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.025, -0.14]}>
            <boxGeometry args={[0.23, 0.08, 0.035]} />
            <meshStandardMaterial color="#1d2020" />
          </mesh>
        </group>
        <Chip position={[0.07, 0.125, 0.04]} size={[0.38, 0.105, 0.38]} />
        <mesh position={[0.55, 0.13, -0.22]}>
          <cylinderGeometry args={[0.1, 0.1, 0.16, 22]} />
          <meshStandardMaterial color="#1e2427" metalness={0.4} />
        </mesh>
        <Silk position={[-0.05, 0.095, -0.33]} size={0.064} color="#e1e7df">
          JSN-SR04T
        </Silk>
      </Board>
      <SensorCable />
      <group position={[3.35, 0.1, -0.58]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.31, 0.33, 0.32, 48]} />
          <meshStandardMaterial
            color="#20272a"
            roughness={0.32}
            metalness={0.45}
          />
        </mesh>
        <mesh position={[0, 0.18, 0]}>
          <cylinderGeometry args={[0.26, 0.26, 0.06, 48]} />
          <meshStandardMaterial
            color="#738185"
            metalness={0.88}
            roughness={0.2}
          />
        </mesh>
      </group>
    </>
  );
}

function LevelModel({
  component,
  activePins,
}: {
  component: HardwareComponent;
  activePins: Set<string>;
}) {
  return (
    <Board component={component} activePins={activePins}>
      <Chip position={[0, 0.13, 0]} size={[0.55, 0.1, 0.42]} />
      <Silk position={[0, 0.1, -0.43]} size={0.062} color="#e6cf42">
        LOGIC LEVEL
      </Silk>
      <Silk position={[0, 0.1, -0.32]} size={0.05} color="#e6cf42">
        CONVERTER
      </Silk>
    </Board>
  );
}

function Wire({
  from,
  to,
  via,
  color,
  selected,
  hovered,
  muted,
  lane,
  onSelect,
  onHover,
}: {
  from: Vec3;
  to: Vec3;
  via?: Vec3;
  color: string;
  selected: boolean;
  hovered: boolean;
  muted: boolean;
  lane: number;
  onSelect: () => void;
  onHover: (active: boolean) => void;
}) {
  const curve = useMemo(() => {
    const a = new THREE.Vector3(...from);
    const b = new THREE.Vector3(...to);
    const lift = selected ? 1.15 : 0.56 + (lane % 5) * 0.09;
    const shift = ((lane % 4) - 1.5) * 0.12;
    const middle = via
      ? new THREE.Vector3(...via).add(new THREE.Vector3(0, 0.2, 0))
      : null;
    return new THREE.CatmullRomCurve3(
      middle
        ? [
            a,
            a.clone().add(new THREE.Vector3(shift, lift, 0.1)),
            middle,
            b.clone().add(new THREE.Vector3(-shift, lift, -0.1)),
            b,
          ]
        : [
            a,
            a.clone().add(new THREE.Vector3(shift, lift, 0.1)),
            b.clone().add(new THREE.Vector3(-shift, lift, -0.1)),
            b,
          ],
    );
  }, [from, to, via, selected, lane]);
  return (
    <mesh
      castShadow
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        onHover(true);
      }}
      onPointerOut={() => onHover(false)}
    >
      <tubeGeometry
        args={[curve, 64, selected || hovered ? 0.046 : 0.034, 9, false]}
      />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={muted ? 0.16 : 1}
        emissive={selected || hovered ? color : "#000000"}
        emissiveIntensity={selected || hovered ? 0.42 : 0}
        roughness={0.37}
        metalness={0.16}
      />
    </mesh>
  );
}

function Junction({
  position,
  color,
  label,
}: {
  position: Vec3;
  color: string;
  label: string;
}) {
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.09, 18]} />
        <meshStandardMaterial color={color} metalness={0.42} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.065, 0]}>
        <cylinderGeometry args={[0.046, 0.046, 0.025, 16]} />
        <meshStandardMaterial
          color="#f0d17a"
          metalness={0.82}
          roughness={0.18}
        />
      </mesh>
      <Silk position={[0, 0.13, 0]} size={0.05} color="#fff1bf">
        {label}
      </Silk>
    </group>
  );
}

function Room({
  selectedConnectionId,
  hoveredConnectionId,
  isolate,
  onSelectConnection,
  onHoverConnection,
}: {
  selectedConnectionId: string | null;
  hoveredConnectionId: string | null;
  isolate: boolean;
  onSelectConnection: (id: string) => void;
  onHoverConnection: (id: string | null) => void;
}) {
  const selectedConnection = connections.find(
    (connection) => connection.id === selectedConnectionId,
  );
  const involved = selectedConnection
    ? new Set([
        selectedConnection.source.componentId,
        selectedConnection.target.componentId,
      ])
    : new Set(hardware.map((component) => component.id));
  const activePins = new Set<string>(
    selectedConnection
      ? [
          `${selectedConnection.source.componentId}:${selectedConnection.source.pinId}`,
          `${selectedConnection.target.componentId}:${selectedConnection.target.pinId}`,
        ]
      : [],
  );
  const renderComponent = (componentId: HardwareComponent["id"]) =>
    !isolate || !selectedConnection || involved.has(componentId);
  return (
    <>
      <color attach="background" args={["#101416"]} />
      <fog attach="fog" args={["#101416", 9, 22]} />
      <ambientLight intensity={0.72} />
      <directionalLight
        position={[3, 7, 4]}
        intensity={2.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, -2]} intensity={24} color="#2eaa8e" />
      <pointLight position={[4, 3, 2]} intensity={20} color="#d68e46" />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.18, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#252b2c" roughness={0.84} />
      </mesh>
      <gridHelper
        args={[12, 24, "#3b4544", "#293130"]}
        position={[0, -0.17, 0]}
      />
      {renderComponent("esp32") && (
        <Esp32Model
          component={componentById("esp32")}
          activePins={activePins}
        />
      )}
      {renderComponent("lora") && (
        <LoraModel component={componentById("lora")} activePins={activePins} />
      )}
      {renderComponent("sensor") && (
        <SensorModel
          component={componentById("sensor")}
          activePins={activePins}
        />
      )}
      {renderComponent("level") && (
        <LevelModel
          component={componentById("level")}
          activePins={activePins}
        />
      )}
      {powerJunctions.map((junction) => (
        <Junction
          key={junction.id}
          position={junction.worldPosition}
          color={
            connections.find((entry) => entry.category === junction.category)
              ?.color ?? "#d9d9d9"
          }
          label={junction.label}
        />
      ))}
      {connections.map((connection, index) => (
        <Wire
          key={connection.id}
          from={worldPinPosition(
            connection.source.componentId,
            connection.source.pinId,
          )}
          to={worldPinPosition(
            connection.target.componentId,
            connection.target.pinId,
          )}
          via={
            connection.junctionId
              ? powerJunctions.find(
                  (junction) => junction.id === connection.junctionId,
                )?.worldPosition
              : undefined
          }
          color={connection.color}
          selected={selectedConnectionId === connection.id}
          hovered={hoveredConnectionId === connection.id}
          muted={Boolean(
            selectedConnection &&
            selectedConnectionId !== connection.id &&
            hoveredConnectionId !== connection.id,
          )}
          lane={index}
          onSelect={() => onSelectConnection(connection.id)}
          onHover={(active) => onHoverConnection(active ? connection.id : null)}
        />
      ))}
      <ContactShadows
        position={[0, -0.16, 0]}
        opacity={0.38}
        scale={10}
        blur={2.4}
        far={3}
      />
      <Environment preset="city" />
    </>
  );
}

export default function LabScene({
  selectedConnectionId,
  hoveredConnectionId,
  isolate,
  onSelectConnection,
  onHoverConnection,
}: {
  selectedConnectionId: string | null;
  hoveredConnectionId: string | null;
  isolate: boolean;
  onSelectConnection: (id: string) => void;
  onHoverConnection: (id: string | null) => void;
}) {
  return (
    <Canvas
      shadows
      camera={{ position: [0.2, 5.35, 8.7], fov: 39 }}
      gl={{ antialias: true, preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <Room
          selectedConnectionId={selectedConnectionId}
          hoveredConnectionId={hoveredConnectionId}
          isolate={isolate}
          onSelectConnection={onSelectConnection}
          onHoverConnection={onHoverConnection}
        />
      </Suspense>
      <OrbitControls
        makeDefault
        minDistance={4.2}
        maxDistance={14}
        maxPolarAngle={Math.PI * 0.48}
        target={[0, 0, 0]}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
