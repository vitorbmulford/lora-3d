/** Fonte única do circuito. As posições foram transcritas das fotografias fornecidas. */
export type ValidationState = "pending" | "validated";
export type ViewMode = "assembly-2d" | "lab-3d";
export type PinSide = "left" | "right" | "top" | "bottom";
export type ConnectionCategory =
  | "power-5v"
  | "power-3v3"
  | "ground"
  | "spi"
  | "trig"
  | "echo";
export type AssemblyMethod = "jumper" | "solder" | "solder-junction";
export type PinContact = "through-hole-header" | "castellated-pad";
export type CableEnd =
  | "dupont-female"
  | "stripped-soldered"
  | "junction-soldered"
  | "pending-confirmation";

export const connectionColors: Record<ConnectionCategory, string> = {
  "power-5v": "#f5a623",
  "power-3v3": "#e6674c",
  ground: "#798898",
  spi: "#4fb5ff",
  trig: "#a875ff",
  echo: "#4dd6a7",
};

export type PhysicalPin = {
  id: string;
  label: string;
  side: PinSide;
  index: number;
  local3d: [number, number, number];
  contact: PinContact;
  description: string;
  verification: ValidationState;
};
export type CableMetadata = {
  type: string;
  originTermination: CableEnd;
  destinationTermination: CableEnd;
  configuration: string;
  solderingRequired: boolean;
  solderLocation: string;
  instruction: string;
};
export type HardwareComponent = {
  id: "esp32" | "lora" | "sensor" | "level";
  name: string;
  shortName: string;
  modelStatus: "parametric-reference";
  modelNote: string;
  dimensionsMm: {
    width: number;
    height: number;
    thickness: number;
    verified: boolean;
  };
  boardColor: string;
  worldPosition: [number, number, number];
  threeSize: [number, number];
  map: { x: number; y: number; width: number; height: number };
  pins: PhysicalPin[];
};
export type AssemblyConnection = {
  id: string;
  source: { componentId: HardwareComponent["id"]; pinId: string };
  target: { componentId: HardwareComponent["id"]; pinId: string };
  signal: string;
  category: ConnectionCategory;
  method: AssemblyMethod;
  junctionId?: string;
  cable: CableMetadata;
  description: string;
  color: string;
  validation: ValidationState;
  validationNote: string;
};
export type AssemblyTask = {
  id: string;
  title: string;
  method: AssemblyMethod;
  description: string;
  validation: ValidationState;
  validationNote: string;
};
export type PhysicalJunction = {
  id: string;
  label: string;
  category: ConnectionCategory;
  mapPosition: [number, number];
  worldPosition: [number, number, number];
  method: "solder-junction";
  description: string;
};

const espLeft = [
  ["esp-5v", "5V"],
  ["esp-gnd-a", "GND"],
  ["esp-3v3", "3V3"],
  ["esp-gpio4", "GPIO4"],
  ["esp-gpio3", "GPIO3"],
  ["esp-gpio2", "GPIO2"],
  ["esp-gpio1", "GPIO1"],
  ["esp-gpio0", "GPIO0"],
];
const espRight = [
  ["esp-gpio5", "GPIO5"],
  ["esp-gpio6", "GPIO6"],
  ["esp-gpio7", "GPIO7"],
  ["esp-gpio8", "GPIO8"],
  ["esp-gpio9", "GPIO9"],
  ["esp-gpio10", "GPIO10"],
  ["esp-gpio20", "GPIO20"],
  ["esp-gpio21", "GPIO21"],
];
const espOffsets = [-0.68, -0.48, -0.28, -0.08, 0.12, 0.32, 0.52, 0.72];
const espPins: PhysicalPin[] = [
  ...espLeft.map(([id, label], index) => ({
    id,
    label,
    side: "left" as const,
    index,
    local3d: [-0.83, 0.12, espOffsets[index]] as [number, number, number],
    contact: "through-hole-header" as const,
    description: `Terminal ${label} da coluna esquerda; USB-C para cima, conforme fotografia do verso. Requer header macho soldado na ESP32 antes de encaixar Dupont.`,
    verification: "validated" as const,
  })),
  ...espRight.map(([id, label], index) => ({
    id,
    label,
    side: "right" as const,
    index,
    local3d: [0.83, 0.12, espOffsets[index]] as [number, number, number],
    contact: "through-hole-header" as const,
    description: `Terminal ${label} da coluna direita; USB-C para cima, conforme fotografia do verso. Requer header macho soldado na ESP32 antes de encaixar Dupont.`,
    verification: "validated" as const,
  })),
];

// SX1278-SMT fotografado: a fileira segue a serigrafia visível, mas NÃO é validada como Ra-02.
const loraLabels = [
  "GND",
  "DIO5",
  "DIO3",
  "DIO2",
  "DIO1",
  "DIO0",
  "RESET",
  "NSS/CS",
  "SCK",
  "MOSI",
  "MISO",
  "GND",
  "3V3/VCC",
];
const loraPins: PhysicalPin[] = loraLabels.map((label, index) => ({
  id:
    label === "GND"
      ? index === 0
        ? "lora-gnd"
        : "lora-gnd-2"
      : `lora-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  label,
  side: "bottom",
  index,
  local3d: [-0.67 + index * (1.34 / 12), 0.07, 0.72] as [
    number,
    number,
    number,
  ],
  contact: "castellated-pad",
  description: `Pad ${label} na fileira inferior do SX1278-SMT fotografado. A posição deve ser conferida na placa recebida: o layout não foi confirmado como o Ra-02 de 16 pads laterais.`,
  verification: "pending",
}));
loraPins.push({
  id: "lora-ant",
  label: "ANT",
  side: "top",
  index: 0,
  local3d: [0.69, 0.07, -0.66],
  contact: "castellated-pad",
  description:
    "Pad ANT isolado no canto superior direito da referência fotográfica; conferir no módulo recebido antes de soldar.",
  verification: "pending",
});

const sensorPins: PhysicalPin[] = [
  ["sensor-5v-vcc", "5V / VCC"],
  ["sensor-trig", "TRIG"],
  ["sensor-echo", "ECHO"],
  ["sensor-gnd", "GND"],
].map(([id, label], index) => ({
  id,
  label,
  side: "bottom",
  index,
  local3d: [-0.4 + index * 0.27, 0.12, 0.44] as [number, number, number],
  contact: "through-hole-header",
  description: `Pino ${label} do conector de quatro vias do JSN/AJ-SR04M; ordem transcrita da serigrafia fotografada e compatível com o manual JSN-SR04T. Confirme a revisão impressa na placa.`,
  verification: "pending",
}));

const levelTop = ["HV4", "HV3", "HV2", "HV1", "HV", "GND"];
const levelBottom = ["LV4", "LV3", "LV2", "LV1", "LV", "GND"];
const levelPins: PhysicalPin[] = [
  ...levelTop.map((label, index) => ({
    id: `level-${label.toLowerCase()}-top`,
    label,
    side: "top" as const,
    index,
    local3d: [-0.48 + index * 0.19, 0.12, -0.48] as [number, number, number],
    contact: "through-hole-header" as const,
    description: `Terminal ${label} da fileira HV do RoboCore, conforme serigrafia fotografada.`,
    verification: "validated" as const,
  })),
  ...levelBottom.map((label, index) => ({
    id: `level-${label.toLowerCase()}-bottom`,
    label,
    side: "bottom" as const,
    index,
    local3d: [-0.48 + index * 0.19, 0.12, 0.48] as [number, number, number],
    contact: "through-hole-header" as const,
    description: `Terminal ${label} da fileira LV do RoboCore, conforme serigrafia fotografada.`,
    verification: "validated" as const,
  })),
];

export const hardware: HardwareComponent[] = [
  {
    id: "esp32",
    name: "ESP32-C3 Super Mini",
    shortName: "ESP32-C3",
    modelStatus: "parametric-reference",
    boardColor: "#1a2524",
    modelNote:
      "Geometria paramétrica baseada nas fotografias frente e verso. Os 16 terminais e o USB-C seguem a serigrafia.",
    dimensionsMm: { width: 18, height: 22, thickness: 1.6, verified: false },
    worldPosition: [-2.45, 0, -0.15],
    threeSize: [1.66, 1.9],
    map: { x: 110, y: 330, width: 180, height: 245 },
    pins: espPins,
  },
  {
    id: "lora",
    name: "SX1278-SMT 433 MHz — revisão pendente",
    shortName: "SX1278-SMT",
    modelStatus: "parametric-reference",
    boardColor: "#1c5796",
    modelNote:
      "A foto indica aproximadamente 17 × 16,5 mm e ANT isolado, mas não confirma que a placa seja um Ra-02. O Ra-02 padrão possui 16 pads laterais; não trate esta geometria como pinout validado.",
    dimensionsMm: { width: 17, height: 16.5, thickness: 1.6, verified: false },
    worldPosition: [-0.1, 0, -0.55],
    threeSize: [1.65, 1.7],
    map: { x: 435, y: 260, width: 190, height: 184 },
    pins: loraPins,
  },
  {
    id: "sensor",
    name: "Controlador JSN/AJ-SR04M",
    shortName: "JSN-SR04T",
    modelStatus: "parametric-reference",
    boardColor: "#1d568f",
    modelNote:
      "Controlador paramétrico a partir das fotografias frente e verso. A referência mostra AJ-SR04M; compare a revisão recebida antes de montar.",
    dimensionsMm: { width: 41, height: 29, thickness: 1.6, verified: true },
    worldPosition: [2.15, 0, 0.24],
    threeSize: [1.92, 1.36],
    map: { x: 790, y: 220, width: 240, height: 170 },
    pins: sensorPins,
  },
  {
    id: "level",
    name: "RoboCore Conversor de Nível Lógico Bidirecional",
    shortName: "RoboCore",
    modelStatus: "parametric-reference",
    boardColor: "#222221",
    modelNote:
      "Placa de quatro canais, com fileiras HV4…HV1, HV, GND e LV4…LV1, LV, GND da serigrafia fotografada.",
    dimensionsMm: { width: 20, height: 13, thickness: 1.6, verified: false },
    worldPosition: [0.55, 0, 1.72],
    threeSize: [1.42, 1.14],
    map: { x: 500, y: 585, width: 230, height: 132 },
    pins: levelPins,
  },
];

const standardPending =
  "Rota especificada para esta estação. Antes da soldagem final, confira continuidade, polaridade e tensão com multímetro.";
const femaleFemale = (instruction: string): CableMetadata => ({
  type: "cabo Dupont",
  originTermination: "dupont-female",
  destinationTermination: "dupont-female",
  configuration: "fêmea–fêmea",
  solderingRequired: false,
  solderLocation: "Não aplicável: encaixar nos headers macho já soldados.",
  instruction,
});
const junctionToHeader = (
  junction: string,
  instruction: string,
): CableMetadata => ({
  type: "fio de distribuição a partir de junção",
  originTermination: "junction-soldered",
  destinationTermination: "dupont-female",
  configuration: "ponta soldada–fêmea",
  solderingRequired: true,
  solderLocation: `Solde a ponta desencapada na junção ${junction}; a outra extremidade é Dupont fêmea no header macho de destino.`,
  instruction,
});
const radioToEsp = (radioPad: string, instruction: string): CableMetadata => ({
  type: "fio flexível soldado ao XL1278-SMT",
  originTermination: "dupont-female",
  destinationTermination: "pending-confirmation",
  configuration: "fêmea–ponta soldada",
  solderingRequired: true,
  solderLocation: `Solde a ponta desencapada diretamente no contato ${radioPad} do XL1278-SMT, somente depois de confirmar a serigrafia na placa recebida.`,
  instruction,
});
const junctionToRadio = (
  junction: string,
  radioPad: string,
  instruction: string,
): CableMetadata => ({
  type: "fio de alimentação com duas extremidades soldadas",
  originTermination: "junction-soldered",
  destinationTermination: "pending-confirmation",
  configuration: "ponta soldada–ponta soldada",
  solderingRequired: true,
  solderLocation: `Solde uma ponta em ${junction} e a outra diretamente no contato ${radioPad} do XL1278-SMT após confirmar a revisão do módulo.`,
  instruction,
});

export const cableMetadataByConnection: Record<string, CableMetadata> = {
  "lora-3v3": junctionToRadio(
    "J3V3",
    "3V3/VCC",
    "Solde um fio fino entre J3V3 e o contato 3V3/VCC do XL1278-SMT; não energize até confirmar o pad e a capacidade do regulador.",
  ),
  "lora-gnd": junctionToRadio(
    "JGND",
    "GND",
    "Solde um fio fino entre JGND e o contato GND do XL1278-SMT; confirme o pad na placa recebida.",
  ),
  "lora-sck": radioToEsp(
    "SCK",
    "Solde a ponta desencapada no contato SCK do XL1278-SMT e encaixe a extremidade Dupont fêmea no GPIO4 da ESP32-C3.",
  ),
  "lora-mosi": radioToEsp(
    "MOSI",
    "Solde a ponta desencapada no contato MOSI do XL1278-SMT e encaixe a extremidade Dupont fêmea no GPIO6 da ESP32-C3.",
  ),
  "lora-miso": radioToEsp(
    "MISO",
    "Solde a ponta desencapada no contato MISO do XL1278-SMT e encaixe a extremidade Dupont fêmea no GPIO5 da ESP32-C3.",
  ),
  "lora-nss": radioToEsp(
    "NSS/CS",
    "Solde a ponta desencapada no contato NSS/CS do XL1278-SMT e encaixe a extremidade Dupont fêmea no GPIO10 da ESP32-C3.",
  ),
  "lora-reset": radioToEsp(
    "RESET",
    "Solde a ponta desencapada no contato RESET do XL1278-SMT e encaixe a extremidade Dupont fêmea no GPIO21 da ESP32-C3.",
  ),
  "lora-dio0": radioToEsp(
    "DIO0",
    "Solde a ponta desencapada no contato DIO0 do XL1278-SMT e encaixe a extremidade Dupont fêmea no GPIO20 da ESP32-C3.",
  ),
  "sensor-5v": junctionToHeader(
    "J5V",
    "Solde o ramo de 5 V em J5V e encaixe a extremidade Dupont fêmea no pino 5V/VCC do sensor.",
  ),
  "sensor-gnd": junctionToHeader(
    "JGND",
    "Solde o ramo de terra em JGND e encaixe a extremidade Dupont fêmea no GND do sensor.",
  ),
  "sensor-trig": femaleFemale(
    "Use um Dupont fêmea–fêmea entre GPIO1 da ESP32-C3 e TRIG do sensor.",
  ),
  "sensor-echo-hv1": femaleFemale(
    "Use um Dupont fêmea–fêmea entre ECHO do sensor e HV1 do RoboCore.",
  ),
  "level-lv1-gpio0": femaleFemale(
    "Use um Dupont fêmea–fêmea entre LV1 do RoboCore e GPIO0 da ESP32-C3.",
  ),
  "level-hv-5v": junctionToHeader(
    "J5V",
    "Solde o ramo de 5 V em J5V e encaixe a extremidade Dupont fêmea em HV do RoboCore.",
  ),
  "level-lv-3v3": junctionToHeader(
    "J3V3",
    "Solde o ramo de 3,3 V em J3V3 e encaixe a extremidade Dupont fêmea em LV do RoboCore.",
  ),
  "level-gnd": junctionToHeader(
    "JGND",
    "Solde o ramo de terra em JGND e encaixe a extremidade Dupont fêmea no GND do RoboCore.",
  ),
};
const link = (
  id: string,
  source: AssemblyConnection["source"],
  target: AssemblyConnection["target"],
  signal: string,
  category: ConnectionCategory,
  description: string,
  validationNote = standardPending,
  junctionId?: string,
): AssemblyConnection => ({
  id,
  source,
  target,
  signal,
  category,
  method: "jumper",
  junctionId,
  cable: cableMetadataByConnection[id],
  description,
  color: connectionColors[category],
  validation: "pending",
  validationNote,
});

export const powerJunctions: PhysicalJunction[] = [
  {
    id: "junction-5v",
    label: "J5V",
    category: "power-5v",
    mapPosition: [345, 505],
    worldPosition: [-1.42, 0.22, 0.86],
    method: "solder-junction",
    description:
      "Junção física de 5 V: um pigtail ou borne soldado sai do 5V da ESP32 e se divide para VCC do sensor e HV do RoboCore.",
  },
  {
    id: "junction-3v3",
    label: "J3V3",
    category: "power-3v3",
    mapPosition: [350, 555],
    worldPosition: [-1.35, 0.22, 1.18],
    method: "solder-junction",
    description:
      "Junção física de 3,3 V: divisão soldada/borne para VCC do rádio e LV do RoboCore.",
  },
  {
    id: "junction-gnd",
    label: "JGND",
    category: "ground",
    mapPosition: [350, 605],
    worldPosition: [-1.24, 0.22, 1.48],
    method: "solder-junction",
    description:
      "Junção física de GND: referência comum para SX1278, sensor e RoboCore.",
  },
];

export const connections: AssemblyConnection[] = [
  link(
    "lora-3v3",
    { componentId: "esp32", pinId: "esp-3v3" },
    { componentId: "lora", pinId: "lora-3v3-vcc" },
    "3V3 → VCC",
    "power-3v3",
    "Alimentação de 3,3 V do SX1278-SMT por jumper a partir da junção J3V3.",
    "PENDENTE CRÍTICA: confirme no datasheet e por medição que o regulador de 3,3 V da ESP32-C3 suporta a corrente de pico do SX1278 antes de energizar. Confirme também a revisão e o pad VCC do rádio.",
    "junction-3v3",
  ),
  link(
    "lora-gnd",
    { componentId: "esp32", pinId: "esp-gnd-a" },
    { componentId: "lora", pinId: "lora-gnd" },
    "GND → GND (SX1278)",
    "ground",
    "Referência de terra do rádio por jumper a partir da junção JGND.",
    "PENDENTE: confirme a revisão e o pad GND do rádio antes de montar.",
    "junction-gnd",
  ),
  link(
    "lora-sck",
    { componentId: "esp32", pinId: "esp-gpio4" },
    { componentId: "lora", pinId: "lora-sck" },
    "GPIO4 → SCK",
    "spi",
    "Clock SPI do ESP32-C3 para o SX1278 por jumper.",
  ),
  link(
    "lora-mosi",
    { componentId: "esp32", pinId: "esp-gpio6" },
    { componentId: "lora", pinId: "lora-mosi" },
    "GPIO6 → MOSI",
    "spi",
    "Dados SPI do ESP32-C3 para o SX1278 por jumper.",
  ),
  link(
    "lora-miso",
    { componentId: "esp32", pinId: "esp-gpio5" },
    { componentId: "lora", pinId: "lora-miso" },
    "GPIO5 → MISO",
    "spi",
    "Dados SPI do SX1278 para o ESP32-C3 por jumper.",
  ),
  link(
    "lora-nss",
    { componentId: "esp32", pinId: "esp-gpio10" },
    { componentId: "lora", pinId: "lora-nss-cs" },
    "GPIO10 → NSS/CS",
    "spi",
    "Seleção de periférico SPI do SX1278 por jumper.",
  ),
  link(
    "lora-reset",
    { componentId: "esp32", pinId: "esp-gpio21" },
    { componentId: "lora", pinId: "lora-reset" },
    "GPIO21 → RESET",
    "spi",
    "Reset do SX1278 por jumper.",
  ),
  link(
    "lora-dio0",
    { componentId: "esp32", pinId: "esp-gpio20" },
    { componentId: "lora", pinId: "lora-dio0" },
    "GPIO20 → DIO0",
    "spi",
    "Interrupção DIO0 do SX1278 por jumper.",
  ),
  link(
    "sensor-5v",
    { componentId: "esp32", pinId: "esp-5v" },
    { componentId: "sensor", pinId: "sensor-5v-vcc" },
    "5V → VCC",
    "power-5v",
    "Alimentação de 5 V do controlador JSN-SR04T por jumper a partir da junção J5V.",
    standardPending,
    "junction-5v",
  ),
  link(
    "sensor-gnd",
    { componentId: "esp32", pinId: "esp-gnd-a" },
    { componentId: "sensor", pinId: "sensor-gnd" },
    "GND → GND (sensor)",
    "ground",
    "Referência de terra do controlador JSN-SR04T por jumper a partir da junção JGND.",
    standardPending,
    "junction-gnd",
  ),
  link(
    "sensor-trig",
    { componentId: "esp32", pinId: "esp-gpio1" },
    { componentId: "sensor", pinId: "sensor-trig" },
    "GPIO1 → TRIG",
    "trig",
    "Pulso de disparo do ultrassônico por jumper.",
  ),
  link(
    "sensor-echo-hv1",
    { componentId: "sensor", pinId: "sensor-echo" },
    { componentId: "level", pinId: "level-hv1-top" },
    "ECHO → HV1",
    "echo",
    "Retorno ECHO no lado de alta tensão do conversor por jumper.",
  ),
  link(
    "level-lv1-gpio0",
    { componentId: "level", pinId: "level-lv1-bottom" },
    { componentId: "esp32", pinId: "esp-gpio0" },
    "LV1 → GPIO0",
    "echo",
    "Retorno ECHO convertido para nível lógico do ESP32-C3 por jumper.",
  ),
  link(
    "level-hv-5v",
    { componentId: "esp32", pinId: "esp-5v" },
    { componentId: "level", pinId: "level-hv-top" },
    "5V → HV",
    "power-5v",
    "Derivação de 5 V para a alimentação HV do RoboCore por jumper a partir da junção J5V.",
    standardPending,
    "junction-5v",
  ),
  link(
    "level-lv-3v3",
    { componentId: "esp32", pinId: "esp-3v3" },
    { componentId: "level", pinId: "level-lv-bottom" },
    "3V3 → LV",
    "power-3v3",
    "Derivação de 3,3 V para a alimentação LV do RoboCore por jumper a partir da junção J3V3.",
    standardPending,
    "junction-3v3",
  ),
  link(
    "level-gnd",
    { componentId: "esp32", pinId: "esp-gnd-a" },
    { componentId: "level", pinId: "level-gnd-top" },
    "GND → GND (RoboCore)",
    "ground",
    "Terra comum para o conversor RoboCore por jumper a partir da junção JGND.",
    standardPending,
    "junction-gnd",
  ),
];

export const assemblyTasks: AssemblyTask[] = [
  {
    id: "power-junctions",
    title: "Soldar as três junções de alimentação",
    method: "solder-junction",
    description:
      "Faça J5V, J3V3 e JGND em borne ou pigtail isolado. Não encaixe dois jumpers fêmea no mesmo pino da ESP32 sem uma junção física.",
    validation: "pending",
    validationNote:
      "Inspecione continuidade entre cada junção e seus ramos; não una J5V e J3V3.",
  },
  {
    id: "antenna-solder",
    title: "Soldar antena helicoidal ao pad ANT",
    method: "solder",
    description:
      "Solde a base da antena helicoidal exclusivamente no pad ANT isolado, no canto superior direito do SX1278-SMT. Não use jumper neste ponto.",
    validation: "pending",
    validationNote:
      "Confirme a frequência da antena (433 MHz) e evite força mecânica sobre o pad.",
  },
  {
    id: "usb-c-power",
    title: "Alimentar pelo USB-C",
    method: "jumper",
    description:
      "Conecte a fonte USB-C à ESP32-C3 depois da inspeção de continuidade e da verificação da alimentação de 3,3 V do rádio.",
    validation: "pending",
    validationNote:
      "A porta USB-C é a entrada de alimentação; não é uma 17ª ligação por jumper.",
  },
];

export function componentById(id: HardwareComponent["id"]) {
  return hardware.find((component) => component.id === id)!;
}
export function pinById(componentId: HardwareComponent["id"], pinId: string) {
  return componentById(componentId).pins.find((pin) => pin.id === pinId)!;
}
export function worldPinPosition(
  componentId: HardwareComponent["id"],
  pinId: string,
): [number, number, number] {
  const component = componentById(componentId);
  const pin = pinById(componentId, pinId);
  return [
    component.worldPosition[0] + pin.local3d[0],
    component.worldPosition[1] + pin.local3d[1],
    component.worldPosition[2] + pin.local3d[2],
  ];
}
