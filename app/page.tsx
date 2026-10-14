"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  ChevronRight,
  CircleDotDashed,
  Eye,
  EyeOff,
  Keyboard,
  Layers3,
  Maximize2,
  RotateCcw,
  Route,
  ScanLine,
  X,
} from "lucide-react";
import AssemblyBoard2D from "@/components/AssemblyBoard2D";
import ConnectionTable from "@/components/ConnectionTable";
import {
  assemblyTasks,
  componentById,
  connections,
  hardware,
  pinById,
  type ViewMode,
} from "@/lib/assembly-data";

const LabScene = dynamic(() => import("@/components/LabScene"), {
  ssr: false,
  loading: () => (
    <div className="lab-loading">
      <span className="loading-ring" /> Carregando o laboratório 3D…
    </div>
  ),
});
const cableEndLabel = {
  "dupont-female": "Dupont fêmea",
  "stripped-soldered": "ponta desencapada soldada",
  "junction-soldered": "ponta soldada na junção",
  "pending-confirmation": "Pendente de confirmação",
} as const;

export default function Page() {
  const [view, setView] = useState<ViewMode>("assembly-2d");
  const [stage, setStage] = useState(0);
  const [isolate, setIsolate] = useState(false);
  const [reviewed, setReviewed] = useState<string[]>([]);
  const [fullscreen, setFullscreen] = useState(false);
  const [hoveredConnectionId, setHoveredConnectionId] = useState<string | null>(
    null,
  );
  const [detailsOpen, setDetailsOpen] = useState(false);
  const isFinal = stage === connections.length;
  const selectedConnection = isFinal ? null : connections[stage];
  const selectedConnectionId = selectedConnection?.id ?? null;
  const sourcePart = selectedConnection
    ? componentById(selectedConnection.source.componentId)
    : null;
  const targetPart = selectedConnection
    ? componentById(selectedConnection.target.componentId)
    : null;
  const sourcePin =
    selectedConnection && sourcePart
      ? pinById(sourcePart.id, selectedConnection.source.pinId)
      : null;
  const targetPin =
    selectedConnection && targetPart
      ? pinById(targetPart.id, selectedConnection.target.pinId)
      : null;
  const activePinKeys = useMemo(
    () =>
      selectedConnection
        ? [
            `${selectedConnection.source.componentId}:${selectedConnection.source.pinId}`,
            `${selectedConnection.target.componentId}:${selectedConnection.target.pinId}`,
          ]
        : [],
    [selectedConnection],
  );

  useEffect(() => {
    try {
      const saved = localStorage.getItem("assembly-review");
      if (saved) setReviewed(JSON.parse(saved));
    } catch {
      /* Browser storage is optional. */
    }
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight")
        setStage((value) => Math.min(connections.length, value + 1));
      if (event.key === "ArrowLeft")
        setStage((value) => Math.max(0, value - 1));
      if (event.key === "1") setView("assembly-2d");
      if (event.key === "2") setView("lab-3d");
      if (event.key.toLowerCase() === "i" && !isFinal)
        setIsolate((value) => !value);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFinal]);

  const selectConnection = (id: string) => {
    const index = connections.findIndex((connection) => connection.id === id);
    if (index >= 0) {
      setStage(index);
      setDetailsOpen(true);
    }
  };
  const toggleReviewed = () => {
    if (!selectedConnectionId) return;
    const next = reviewed.includes(selectedConnectionId)
      ? reviewed.filter((id) => id !== selectedConnectionId)
      : [...reviewed, selectedConnectionId];
    setReviewed(next);
    localStorage.setItem("assembly-review", JSON.stringify(next));
  };
  const capture = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `laboratorio-${selectedConnectionId ?? "circuito-completo"}.png`;
    link.click();
  };
  const reset = () => {
    setStage(0);
    setIsolate(false);
  };

  return (
    <main className={fullscreen ? "laboratory fullscreen" : "laboratory"}>
      <header className="lab-header">
        <div className="lab-brand">
          <span className="brand-symbol">
            <Route size={18} />
          </span>
          <span>
            <b>CIRCUITLAB</b>
            <small>GUIA DE MONTAGEM ORIENTADO POR DADOS</small>
          </span>
        </div>
        <div className="header-audit">
          <span className="status-dot" /> 16 LIGAÇÕES ESPECIFICADAS <i />{" "}
          VALIDAÇÃO ELÉTRICA PENDENTE
        </div>
        <div className="header-shortcuts">
          <Keyboard size={15} />
          <span>
            <kbd>1</kbd> 2D <kbd>2</kbd> 3D <kbd>←</kbd>
            <kbd>→</kbd> etapa <kbd>I</kbd> isolar
          </span>
        </div>
      </header>
      <div
        className={`lab-layout ${detailsOpen ? "details-open" : "details-closed"}`}
      >
        <aside className="guide-panel">
          <div className="panel-title">
            <span className="section-eyebrow">MONTAGEM GUIADA</span>
            <h1>
              {isFinal
                ? "Circuito final"
                : `Conexão ${String(stage + 1).padStart(2, "0")}`}
              <em>/{String(connections.length).padStart(2, "0")}</em>
            </h1>
          </div>
          <div className="guide-progress">
            <div>
              <span>REVISÃO VISUAL</span>
              <b>
                {reviewed.length}/{connections.length}
              </b>
            </div>
            <i>
              <span
                style={{
                  width: `${(reviewed.length / connections.length) * 100}%`,
                }}
              />
            </i>
            <small>Marcar aqui não valida a ligação física.</small>
          </div>
          {selectedConnection &&
          sourcePart &&
          targetPart &&
          sourcePin &&
          targetPin ? (
            <>
              <div
                className="guide-connection"
                style={
                  {
                    "--connection": selectedConnection.color,
                  } as React.CSSProperties
                }
              >
                <div className="connection-index">
                  <span>
                    ETAPA ATUAL ·{" "}
                    {selectedConnection.junctionId
                      ? "JUMPER + JUNÇÃO SOLDADA"
                      : "JUMPER"}
                  </span>
                  <b>{selectedConnection.signal}</b>
                </div>
                <div className="terminal-pair">
                  <div>
                    <span>ORIGEM</span>
                    <b>{sourcePart.shortName}</b>
                    <strong>{sourcePin.label}</strong>
                    <small>terminal físico</small>
                  </div>
                  <ChevronRight size={18} />
                  <div>
                    <span>DESTINO</span>
                    <b>{targetPart.shortName}</b>
                    <strong>{targetPin.label}</strong>
                    <small>terminal físico</small>
                  </div>
                </div>
                <p>{selectedConnection.description}</p>
              </div>
              <div className="pending-callout">
                <CircleDotDashed size={17} />
                <div>
                  <b>PENDENTE DE VALIDAÇÃO</b>
                  <p>{selectedConnection.validationNote}</p>
                </div>
              </div>
              <button
                className={`review-button ${reviewed.includes(selectedConnection.id) ? "reviewed" : ""}`}
                onClick={toggleReviewed}
              >
                <span>
                  {reviewed.includes(selectedConnection.id) && (
                    <Check size={13} />
                  )}
                </span>
                {reviewed.includes(selectedConnection.id)
                  ? "Revisão visual concluída"
                  : "Marcar revisão visual"}
              </button>
            </>
          ) : (
            <div className="guide-connection final-guide">
              <div className="connection-index">
                <span>ETAPA FINAL</span>
                <b>16 ligações expostas</b>
              </div>
              <p>
                Todos os jumpers estão visíveis. Inspecione cada fio até os dois
                terminais, realize as junções de alimentação e a solda da antena
                em ANT antes de conectar USB-C.
              </p>
              <div className="final-tasks">
                {assemblyTasks.map((task) => (
                  <div key={task.id}>
                    <b>
                      {task.method === "solder-junction"
                        ? "JUNÇÃO SOLDADA"
                        : task.method === "solder"
                          ? "SOLDA"
                          : "ALIMENTAÇÃO"}
                    </b>
                    <span>{task.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="guide-steps">
            <span className="section-eyebrow">LIGAÇÕES FÍSICAS</span>
            {connections.map((connection, index) => (
              <button
                key={connection.id}
                className={index === stage ? "active" : ""}
                onClick={() => setStage(index)}
              >
                <i style={{ background: connection.color }} />{" "}
                <span>
                  <b>
                    {String(index + 1).padStart(2, "0")} · {connection.signal}
                  </b>
                  <small>jumper · aguarda validação</small>
                </span>
                {reviewed.includes(connection.id) && <Check size={14} />}
              </button>
            ))}
            <button
              className={isFinal ? "active final-step" : "final-step"}
              onClick={() => setStage(connections.length)}
            >
              <i />{" "}
              <span>
                <b>17 · Circuito completo</b>
                <small>16 fios + ANT + USB-C</small>
              </span>
            </button>
          </div>
        </aside>
        <section className="work-panel">
          <div className="work-toolbar">
            <div>
              <span className="section-eyebrow">
                {view === "assembly-2d"
                  ? "MODO MONTAGEM · ORTOGRÁFICO"
                  : "MODO LABORATÓRIO · WEBGL"}
              </span>
              <h2>
                {isFinal
                  ? "Circuito completo conectado"
                  : view === "assembly-2d"
                    ? "Mapa de conexões e terminais"
                    : "Bancada 3D sincronizada"}
              </h2>
            </div>
            <div className="toolbar-actions">
              <div className="view-switch" role="tablist">
                <button
                  className={view === "assembly-2d" ? "active" : ""}
                  onClick={() => setView("assembly-2d")}
                >
                  <ScanLine size={15} /> Montagem 2D
                </button>
                <button
                  className={view === "lab-3d" ? "active" : ""}
                  onClick={() => setView("lab-3d")}
                >
                  <Layers3 size={15} /> Laboratório 3D
                </button>
              </div>
              {view === "lab-3d" && (
                <>
                  <button
                    disabled={isFinal}
                    className={`tool-button ${isolate ? "active" : ""}`}
                    onClick={() => setIsolate(!isolate)}
                  >
                    {isolate ? <EyeOff size={15} /> : <Eye size={15} />}
                    {isolate ? "Ocultando outros" : "Isolar ligação"}
                  </button>
                  <button
                    className="icon-action"
                    title="Capturar laboratório"
                    onClick={capture}
                  >
                    <Camera size={17} />
                  </button>
                </>
              )}
              <button
                className="icon-action"
                title="Tela cheia"
                onClick={() => setFullscreen(!fullscreen)}
              >
                <Maximize2 size={17} />
              </button>
            </div>
          </div>
          <div className={`visual-stage ${view}`}>
            {view === "assembly-2d" ? (
              <AssemblyBoard2D
                selectedConnectionId={selectedConnectionId}
                hoveredConnectionId={hoveredConnectionId}
                onSelectConnection={selectConnection}
                onHoverConnection={setHoveredConnectionId}
                activePinKeys={activePinKeys}
              />
            ) : (
              <LabScene
                selectedConnectionId={selectedConnectionId}
                hoveredConnectionId={hoveredConnectionId}
                isolate={isolate}
                onSelectConnection={selectConnection}
                onHoverConnection={setHoveredConnectionId}
              />
            )}
            {view === "lab-3d" && (
              <div className="scene-overlay">
                <span>
                  <i className="status-dot" />{" "}
                  {isFinal
                    ? "16 FIOS VISÍVEIS E ANCORADOS"
                    : "FIO 3D ANCORADO A TERMINAIS"}
                </span>
                <span>CLIQUE OU PASSE O MOUSE SOBRE UM FIO</span>
              </div>
            )}
          </div>
          {selectedConnection &&
          sourcePart &&
          targetPart &&
          sourcePin &&
          targetPin ? (
            <div className="selection-summary">
              <span
                className="connection-color"
                style={{ background: selectedConnection.color }}
              />
              <div>
                <b>{selectedConnection.signal}</b>
                <small>
                  {sourcePart.shortName} · {sourcePin.label} →{" "}
                  {targetPart.shortName} · {targetPin.label}
                </small>
              </div>
              <span className="validation-chip pending">
                <CircleDotDashed size={13} /> Jumper · pendente
              </span>
              {!detailsOpen && (
                <button
                  className="detail-launch"
                  onClick={() => setDetailsOpen(true)}
                >
                  Expandir detalhes
                </button>
              )}
            </div>
          ) : (
            <div className="selection-summary">
              <span
                className="connection-color"
                style={{ background: "#e2e8e7" }}
              />
              <div>
                <b>Circuito completo</b>
                <small>
                  16 jumpers, antena helicoidal no ANT e alimentação pelo USB-C
                </small>
              </div>
              <span className="validation-chip pending">
                <CircleDotDashed size={13} /> Verificação final
              </span>
            </div>
          )}
          <div className="step-navigation">
            <button
              onClick={() => setStage((value) => Math.max(0, value - 1))}
              disabled={stage === 0}
            >
              <ArrowLeft size={16} /> Anterior
            </button>
            <div>
              {connections.map((connection, index) => (
                <button
                  key={connection.id}
                  className={index === stage ? "active" : ""}
                  style={{ background: connection.color }}
                  onClick={() => setStage(index)}
                  aria-label={`Selecionar ${connection.signal}`}
                />
              ))}
              <button
                className={isFinal ? "active final-dot" : "final-dot"}
                onClick={() => setStage(connections.length)}
                aria-label="Mostrar circuito completo"
              />
            </div>
            <button
              onClick={() =>
                setStage((value) => Math.min(connections.length, value + 1))
              }
              disabled={isFinal}
            >
              Próxima <ArrowRight size={16} />
            </button>
          </div>
        </section>
        <aside className={`detail-panel ${detailsOpen ? "open" : "closed"}`}>
          <button
            className="detail-toggle"
            onClick={() => setDetailsOpen(!detailsOpen)}
          >
            {detailsOpen ? (
              <>
                <X size={13} /> Fechar detalhes
              </>
            ) : (
              "Abrir detalhes do fio"
            )}
          </button>
          {detailsOpen && (
            <>
              <div className="panel-title">
                <span className="section-eyebrow">
                  {isFinal ? "VERIFICAÇÃO FINAL" : "DETALHES DO FIO"}
                </span>
                <h2>
                  {isFinal ? "Antes de energizar" : "Terminais e montagem"}
                </h2>
              </div>
              {selectedConnection &&
              sourcePart &&
              targetPart &&
              sourcePin &&
              targetPin ? (
                <>
                  <div className="pin-card">
                    <span>ORIGEM</span>
                    <b>{sourcePart.name}</b>
                    <strong>{sourcePin.label}</strong>
                    <p>{sourcePin.description}</p>
                  </div>
                  <div className="wire-arrow">
                    <i style={{ background: selectedConnection.color }} />{" "}
                    <ArrowRight size={15} />{" "}
                    <i style={{ background: selectedConnection.color }} />
                  </div>
                  <div className="pin-card">
                    <span>DESTINO</span>
                    <b>{targetPart.name}</b>
                    <strong>{targetPin.label}</strong>
                    <p>{targetPin.description}</p>
                  </div>
                  <div className="cable-card">
                    <span>DETALHES MECÂNICOS</span>
                    <b>{selectedConnection.cable.type}</b>
                    <dl>
                      <div>
                        <dt>Origem</dt>
                        <dd>
                          {
                            cableEndLabel[
                              selectedConnection.cable.originTermination
                            ]
                          }
                        </dd>
                      </div>
                      <div>
                        <dt>Destino</dt>
                        <dd>
                          {
                            cableEndLabel[
                              selectedConnection.cable.destinationTermination
                            ]
                          }
                        </dd>
                      </div>
                      <div>
                        <dt>Cabo</dt>
                        <dd>{selectedConnection.cable.configuration}</dd>
                      </div>
                      <div>
                        <dt>Soldagem</dt>
                        <dd>
                          {selectedConnection.cable.solderingRequired
                            ? "SIM"
                            : "NÃO"}
                        </dd>
                      </div>
                    </dl>
                    <p>
                      <b>Onde:</b> {selectedConnection.cable.solderLocation}
                    </p>
                    <p>
                      <b>Como:</b> {selectedConnection.cable.instruction}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="pin-card">
                    <span>ANTENA</span>
                    <b>XL1278-SMT</b>
                    <strong>ANT · SOLDA</strong>
                    <p>
                      Antena helicoidal de 433 MHz no pad ANT isolado, pendente
                      de confirmação da revisão.
                    </p>
                  </div>
                  <div className="pin-card">
                    <span>ALIMENTAÇÃO</span>
                    <b>ESP32-C3</b>
                    <strong>USB-C</strong>
                    <p>
                      Conectar somente após verificar ausência de curto e a
                      capacidade do regulador de 3,3 V.
                    </p>
                  </div>
                </>
              )}
              <div className="model-audit">
                <span className="section-eyebrow">FIDELIDADE DO MODELO</span>
                {(selectedConnection && sourcePart && targetPart
                  ? [sourcePart, targetPart]
                  : hardware
                ).map((component) => (
                  <div key={component.id}>
                    <b>{component.shortName}</b>
                    <span>Paramétrico por referência</span>
                    <small>
                      {component.dimensionsMm.verified
                        ? "Dimensão de referência verificada"
                        : "Dimensões pendentes de medição"}
                    </small>
                  </div>
                ))}
              </div>
              <button className="reset-selection" onClick={reset}>
                <RotateCcw size={14} /> Restaurar visualização
              </button>
            </>
          )}
        </aside>
      </div>
      <ConnectionTable
        selectedConnectionId={selectedConnectionId}
        onSelect={selectConnection}
      />
      <footer className="lab-footer">
        As 16 ligações seguem a especificação da estação. A capacidade do
        regulador de 3,3 V para o SX1278 permanece explicitamente pendente antes
        da energização.
      </footer>
    </main>
  );
}
