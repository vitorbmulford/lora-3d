import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  assemblyTasks,
  cableMetadataByConnection,
  componentById,
  connections,
  hardware,
  pinById,
  powerJunctions,
  worldPinPosition,
} from "../lib/assembly-data.ts";

test("cada componente tem um conjunto de pinos físicos único", () => {
  for (const component of hardware) {
    assert.ok(component.pins.length > 0, `${component.id} precisa ter pinos`);
    assert.equal(
      new Set(component.pins.map((pin) => pin.id)).size,
      component.pins.length,
    );
    for (const pin of component.pins) {
      assert.equal(pin.local3d.length, 3);
      assert.ok(pin.label);
    }
  }
});

test("cada conexão aponta para terminais existentes da fonte única de dados", () => {
  assert.equal(
    new Set(connections.map((connection) => connection.id)).size,
    connections.length,
  );
  for (const connection of connections) {
    const source = pinById(
      connection.source.componentId,
      connection.source.pinId,
    );
    const target = pinById(
      connection.target.componentId,
      connection.target.pinId,
    );
    assert.ok(source && target);
    assert.notDeepEqual(
      worldPinPosition(connection.source.componentId, connection.source.pinId),
      worldPinPosition(connection.target.componentId, connection.target.pinId),
    );
  }
});

test("as 16 ligações especificadas permanecem pendentes de validação elétrica", () => {
  assert.equal(connections.length, 16);
  for (const connection of connections) {
    assert.equal(connection.validation, "pending");
    assert.ok(connection.validationNote.length > 20);
  }
});

test("o SX1278 mantém a referência dimensional, mas não é declarado como Ra-02 validado", () => {
  for (const component of hardware) {
    assert.equal(
      componentById(component.id).modelStatus,
      "parametric-reference",
    );
  }
  const lora = componentById("lora");
  assert.equal(lora.dimensionsMm.width, 17);
  assert.equal(lora.dimensionsMm.height, 16.5);
  assert.equal(lora.dimensionsMm.verified, false);
  assert.match(lora.modelNote, /não confirma que a placa seja um Ra-02/i);
});

test("os terminais usados têm nomenclatura física e a antena e USB-C são tarefas separadas", () => {
  const generic = /^(L\d+|R\d+|P\d+|SIG\s*\d+|[A-E])$/;
  for (const connection of connections) {
    assert.ok(
      !generic.test(
        pinById(connection.source.componentId, connection.source.pinId).label,
      ),
    );
    assert.ok(
      !generic.test(
        pinById(connection.target.componentId, connection.target.pinId).label,
      ),
    );
    assert.equal(connection.method, "jumper");
  }
  assert.deepEqual(
    assemblyTasks.map((task) => task.id),
    ["power-junctions", "antenna-solder", "usb-c-power"],
  );
  assert.equal(assemblyTasks[0].method, "solder-junction");
  assert.equal(assemblyTasks[1].method, "solder");
});

test("a alimentação do SX1278 carrega a pendência do regulador de 3,3 V", () => {
  const power = connections.find((connection) => connection.id === "lora-3v3");
  assert.match(power.validationNote, /regulador de 3,3 V/i);
});

test("o roteiro contém exatamente as 16 rotas autorizadas, com origem e destino corretos", () => {
  const expected = {
    "lora-3v3": ["esp-3v3", "lora-3v3-vcc"],
    "lora-gnd": ["esp-gnd-a", "lora-gnd"],
    "lora-sck": ["esp-gpio4", "lora-sck"],
    "lora-mosi": ["esp-gpio6", "lora-mosi"],
    "lora-miso": ["esp-gpio5", "lora-miso"],
    "lora-nss": ["esp-gpio10", "lora-nss-cs"],
    "lora-reset": ["esp-gpio21", "lora-reset"],
    "lora-dio0": ["esp-gpio20", "lora-dio0"],
    "sensor-5v": ["esp-5v", "sensor-5v-vcc"],
    "sensor-gnd": ["esp-gnd-a", "sensor-gnd"],
    "sensor-trig": ["esp-gpio1", "sensor-trig"],
    "sensor-echo-hv1": ["sensor-echo", "level-hv1-top"],
    "level-lv1-gpio0": ["level-lv1-bottom", "esp-gpio0"],
    "level-hv-5v": ["esp-5v", "level-hv-top"],
    "level-lv-3v3": ["esp-3v3", "level-lv-bottom"],
    "level-gnd": ["esp-gnd-a", "level-gnd-top"],
  };
  assert.deepEqual(
    Object.fromEntries(
      connections.map((connection) => [
        connection.id,
        [connection.source.pinId, connection.target.pinId],
      ]),
    ),
    expected,
  );
});

test("nunca roteia 5 V para o rádio e sempre mantém ECHO atrás do conversor", () => {
  for (const connection of connections) {
    const touchesLora =
      connection.source.componentId === "lora" ||
      connection.target.componentId === "lora";
    assert.ok(
      !touchesLora || connection.category !== "power-5v",
      `${connection.id} não pode levar 5 V ao rádio`,
    );
  }
  const echoIn = connections.find(
    (connection) => connection.id === "sensor-echo-hv1",
  );
  const echoOut = connections.find(
    (connection) => connection.id === "level-lv1-gpio0",
  );
  assert.deepEqual(echoIn.target, {
    componentId: "level",
    pinId: "level-hv1-top",
  });
  assert.deepEqual(echoOut.source, {
    componentId: "level",
    pinId: "level-lv1-bottom",
  });
});

test("derivações de alimentação exigem junções físicas explícitas", () => {
  assert.deepEqual(
    powerJunctions.map((junction) => junction.id),
    ["junction-5v", "junction-3v3", "junction-gnd"],
  );
  for (const id of ["sensor-5v", "level-hv-5v"])
    assert.equal(
      connections.find((connection) => connection.id === id).junctionId,
      "junction-5v",
    );
  for (const id of ["lora-3v3", "level-lv-3v3"])
    assert.equal(
      connections.find((connection) => connection.id === id).junctionId,
      "junction-3v3",
    );
  for (const id of ["lora-gnd", "sensor-gnd", "level-gnd"])
    assert.equal(
      connections.find((connection) => connection.id === id).junctionId,
      "junction-gnd",
    );
});

test("cada um dos 16 fios possui metadados mecânicos explícitos e instrução prática", () => {
  assert.equal(Object.keys(cableMetadataByConnection).length, 16);
  for (const connection of connections) {
    const cable = connection.cable;
    assert.ok(
      cable.type.length > 3,
      `${connection.id} precisa informar o tipo de cabo`,
    );
    assert.ok(
      cable.configuration.length > 3,
      `${connection.id} precisa informar a configuração`,
    );
    assert.ok(
      cable.solderLocation.length > 10,
      `${connection.id} precisa informar onde soldar`,
    );
    assert.ok(
      cable.instruction.length > 20,
      `${connection.id} precisa informar como montar`,
    );
    assert.ok(
      [
        "dupont-female",
        "stripped-soldered",
        "junction-soldered",
        "pending-confirmation",
      ].includes(cable.originTermination),
    );
    assert.ok(
      [
        "dupont-female",
        "stripped-soldered",
        "junction-soldered",
        "pending-confirmation",
      ].includes(cable.destinationTermination),
    );
  }
});

test("fios do XL1278-SMT usam soldagem direta pendente de confirmação, nunca header fictício", () => {
  const loraConnections = connections.filter(
    (connection) =>
      connection.source.componentId === "lora" ||
      connection.target.componentId === "lora",
  );
  assert.equal(loraConnections.length, 8);
  for (const connection of loraConnections) {
    assert.equal(connection.cable.solderingRequired, true);
    assert.equal(
      connection.cable.destinationTermination,
      "pending-confirmation",
    );
    assert.match(connection.cable.solderLocation, /XL1278-SMT/);
    assert.doesNotMatch(connection.cable.configuration, /fêmea–fêmea/);
  }
});

test("fios entre headers confirmados permanecem Dupont fêmea–fêmea sem soldagem de sinal", () => {
  for (const id of ["sensor-trig", "sensor-echo-hv1", "level-lv1-gpio0"]) {
    const cable = connections.find((connection) => connection.id === id).cable;
    assert.equal(cable.configuration, "fêmea–fêmea");
    assert.equal(cable.solderingRequired, false);
  }
});

test("as duas visualizações propagam clique e hover para qualquer uma das 16 conexões", () => {
  const board2d = readFileSync(
    new URL("../components/AssemblyBoard2D.tsx", import.meta.url),
    "utf8",
  );
  const scene3d = readFileSync(
    new URL("../components/LabScene.tsx", import.meta.url),
    "utf8",
  );
  assert.match(board2d, /connections\.map/);
  assert.match(board2d, /onMouseEnter=.*onHoverConnection/);
  assert.match(board2d, /onClick=.*onSelectConnection/);
  assert.match(scene3d, /connections\.map/);
  assert.match(scene3d, /onPointerOver/);
  assert.match(scene3d, /onClick=.*onSelect/);
  assert.equal(connections.length, 16);
});
