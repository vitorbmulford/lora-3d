# Pesquisa de modelos e fidelidade física

Pesquisa realizada em 14 de outubro de 2026, antes da refatoração visual.

| Componente fotografado | Resultado da pesquisa | Decisão no laboratório |
| --- | --- | --- |
| ESP32-C3 Super Mini | As novas fotos frente e verso mostram a serigrafia das duas colunas: `5V, GND, 3V3, GPIO4…GPIO0` e `GPIO5…GPIO21`. | Modelo paramétrico com a posição dos 16 terminais transcrita da foto; dimensões ainda aguardam medição. |
| SX1278-SMT 433 MHz | A foto identifica um módulo SMT de aproximadamente 17 × 16,5 mm, uma fileira de pads e ANT. O Ra-02 de referência tem footprint diferente, portanto não pode validar esta placa apenas por semelhança. | Geometria paramétrica apenas como referência fotográfica; todos os pads e ANT permanecem pendentes da identificação física da revisão. |
| JSN/AJ-SR04M | Fotos frente e verso mostram o controlador e a serigrafia do conector de quatro vias. | Placa, conector, cabo e transdutor são parametrizados; `5V/VCC`, `TRIG`, `ECHO` e `GND` seguem a referência fornecida. |
| RoboCore conversor bidirecional de quatro canais | A foto do produto mostra as fileiras `HV4…HV1, HV, GND` e `LV4…LV1, LV, GND`. | Geometria paramétrica com a disposição das duas fileiras transcrita da serigrafia; dimensões aguardam medição. |

Os arquivos CAD encontrados não foram baixados ou incorporados, pois não há confirmação de que correspondem exatamente ao hardware adquirido e alguns dependem de conta/licença. Para substituir um modelo paramétrico, inclua um arquivo GLB/GLTF de procedência conhecida e atualize `lib/assembly-data.ts` com a origem, a revisão e as dimensões verificadas.

O guia mantém as 16 conexões em estado `pending` para a inspeção de bancada. A rota e os terminais foram especificados para a estação; as pendências críticas antes da energização são a revisão/pinagem do rádio e a capacidade do regulador de 3,3 V da ESP32-C3 para o pico de corrente do SX1278. Veja também [electrical-audit.md](electrical-audit.md).
