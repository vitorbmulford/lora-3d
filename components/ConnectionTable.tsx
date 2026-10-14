"use client";

import { CheckCircle2, CircleDotDashed } from "lucide-react";
import { componentById, connections, pinById } from "@/lib/assembly-data";

export default function ConnectionTable({
  selectedConnectionId,
  onSelect,
}: {
  selectedConnectionId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <section
      className="connection-table-section"
      aria-label="Tabela de conexões"
    >
      <div className="table-heading">
        <div>
          <span className="section-eyebrow">FONTE ÚNICA DE DADOS</span>
          <h2>Tabela de conexões</h2>
        </div>
        <span className="table-counter">
          {connections.length} jumpers especificados
        </span>
      </div>
      <div className="connection-table-wrap">
        <table className="connection-table">
          <thead>
            <tr>
              <th>Ligação</th>
              <th>Origem</th>
              <th>Destino</th>
              <th>Função / montagem</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {connections.map((connection) => {
              const sourcePart = componentById(connection.source.componentId);
              const sourcePin = pinById(
                connection.source.componentId,
                connection.source.pinId,
              );
              const targetPart = componentById(connection.target.componentId);
              const targetPin = pinById(
                connection.target.componentId,
                connection.target.pinId,
              );
              const selected = selectedConnectionId === connection.id;
              return (
                <tr
                  key={connection.id}
                  className={selected ? "selected" : ""}
                  onClick={() => onSelect(connection.id)}
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ")
                      onSelect(connection.id);
                  }}
                >
                  <td>
                    <span
                      className="connection-color"
                      style={{ background: connection.color }}
                    />
                    <strong>{connection.signal}</strong>
                    <small>{connection.id}</small>
                  </td>
                  <td>
                    <b>{sourcePart.shortName}</b>
                    <span>{sourcePin.label} · posição física</span>
                  </td>
                  <td>
                    <b>{targetPart.shortName}</b>
                    <span>{targetPin.label} · posição física</span>
                  </td>
                  <td>
                    {connection.description}
                    <small className="method-tag">
                      {connection.cable.configuration} ·{" "}
                      {connection.cable.solderingRequired
                        ? "SOLDA"
                        : "SEM SOLDA"}
                    </small>
                    <small>
                      JUMPER{connection.junctionId ? " + JUNÇÃO SOLDADA" : ""} ·{" "}
                      {connection.category}
                    </small>
                  </td>
                  <td>
                    <span
                      className={`validation-chip ${connection.validation}`}
                    >
                      {connection.validation === "validated" ? (
                        <CheckCircle2 size={13} />
                      ) : (
                        <CircleDotDashed size={13} />
                      )}
                      {connection.validation === "validated"
                        ? "Validada"
                        : "Pendente"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
