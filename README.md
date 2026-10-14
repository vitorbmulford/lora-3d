# Circuit Lab — Laboratório 3D de montagem

Aplicação Next.js com App Router, TypeScript e React Three Fiber para explorar uma unidade ESP32-C3 + LoRa + JSN-SR04T em duas vistas sincronizadas: mapa de montagem superior 2D e bancada WebGL 3D.

## Executar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para gerar a versão de produção, use `npm run build`; para executar a checagem dos dados do roteiro, use `npm test`.

## Referências e fidelidade

As imagens fornecidas foram copiadas para `public/` para exibição na interface:

- ESP32-C3 Super Mini: captura `11-21-31`.
- Módulo LoRa SX1278 433 MHz: captura `11-21-29`.
- JSN-SR04T com controlador e transdutor: captura `11-21-38`.
- Conversor lógico bidirecional: captura `11-21-40`.
- Capturas `11-21-33`, `11-21-34` e `11-21-37` mostram jumpers, carregador e solda; `11-21-25` mostra o ferro.

Os modelos tridimensionais atuais são representações paramétricas feitas em geometria Three.js. As fotos frente e verso confirmam a serigrafia do ESP32-C3 Super Mini, o conector do JSN/AJ-SR04M e as duas fileiras HV/LV do RoboCore. A placa de rádio fotografada diz `SX1278-SMT`, mas ainda não foi identificada como Ra-02; sua pinagem e o pad ANT permanecem explicitamente pendentes de inspeção da peça recebida. A pesquisa e a auditoria estão em [docs/model-research.md](docs/model-research.md) e [docs/electrical-audit.md](docs/electrical-audit.md).

## Pendências de hardware

O roteiro contém as 16 ligações especificadas para a estação: oito para o SX1278, três para o JSN-SR04T, duas para o caminho ECHO pelo RoboCore e três derivações de alimentação do RoboCore. A antena helicoidal é uma tarefa de **soldagem** no pad ANT; os 16 trajetos elétricos são **jumpers**. O USB-C é a entrada de alimentação, não uma 17ª ligação.

As ligações permanecem `Pendente` até a inspeção física. Em especial, a capacidade do regulador de 3,3 V da ESP32-C3 para a corrente de pico do SX1278 e a revisão/pinagem física do rádio precisam ser verificadas antes de energizar. A aplicação mostra a origem e o destino físico de cada jumper, mas a marcação de revisão visual não é uma validação elétrica.

## Interação

- Modo 2D: clique em qualquer fio para selecionar a ligação; os dois terminais são destacados simultaneamente.
- Modo 3D: arraste para orbitar, use o scroll para zoom e use **Isolar ligação** para ocultar componentes que não participam da etapa.
- `1` abre o mapa 2D, `2` abre o laboratório 3D, `←` e `→` alternam a conexão e `I` isola os componentes envolvidos.
- A etapa **17 · Circuito completo** exibe os 16 jumpers de uma vez, mais as instruções de ANT e USB-C.
- A revisão visual das etapas fica salva no armazenamento local. Ela não valida a ligação elétrica.
- A câmera 3D pode ser capturada como PNG.

## Estrutura

- `app/`: layout, interface e estilos.
- `lib/assembly-data.ts`: fonte única de componentes, pinos físicos, posições 2D/3D e conexões.
- `components/AssemblyBoard2D.tsx`: vista ortográfica e conexões SVG.
- `components/LabScene.tsx`: bancada WebGL e fios 3D ancorados nas mesmas posições de pino.
- `components/ConnectionTable.tsx`: tabela acessível das ligações.
- `tests/data.test.mjs`: integridade de pinos, IDs, extremidades e estados de validação.
