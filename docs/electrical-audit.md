# Auditoria elétrica e visual — estação ESP32-C3 / LoRa / ultrassônico

Data da revisão: 14 de outubro de 2026. Este relatório descreve o que a aplicação pode afirmar a partir das fotos e da documentação; não é uma autorização para energizar o conjunto.

## Resultado geral

**Estado: não validado para energização.** A capacidade do regulador de 3,3 V da revisão específica da ESP32-C3 Super Mini não foi identificada. O rádio SX1278-SMT fotografado também não foi identificado de forma inequívoca como um Ra-02: o Ra-02 documentado tem 16 pads castelados laterais, enquanto a referência fotográfica exibe outra serigrafia e um pad ANT isolado. A aplicação passou a sinalizar essa diferença em vez de tratar as coordenadas do desenho como confirmação elétrica.

## Referências confrontadas

- [Datasheet ESP32-C3 da Espressif](https://documentation.espressif.com/esp32-c3_datasheet_en.html): GPIO0–GPIO21 são GPIOs do chip; GPIO20/21 têm funções padrão U0RXD/U0TXD. O datasheet do chip não informa a corrente do regulador da placa Super Mini de terceiros.
- [Manual JSN-SR04T](https://www.openbikesensor.org/docs/other/collective-order/jsn-sr04t-en.pdf): pinos, vistos na serigrafia do conector, são `5V`, `TRIG`, `ECHO`, `GND`; alimentação de 5 V e corrente típica de 40 mA.
- [Produto RoboCore](https://www.robocore.net/regulador-de-tensao/conversor-de-nivel-logico): requer HV, LV e GND; HV1 corresponde a LV1 e os quatro canais são bidirecionais para sinais digitais.
- [Página Ra-02 Ai-Thinker](https://voice-admin.ai-thinker.com/en/Ra-02/): 3,3 V, até 105 mA de operação. A fonte confirma o risco de corrente, mas não deve substituir a confirmação da revisão física fotografada.
- [Pinout Ra-02 de referência](https://www.narincomicro.com/uploads/files/42802706388e3daac67331cf9adf692c.pdf): usado somente para identificar a divergência de footprint, não para remapear silenciosamente o SX1278-SMT fotografado.

## Conexões verificadas no roteiro

| IDs | Rota declarada | Finalidade | Resultado de auditoria |
| --- | --- | --- | --- |
| `lora-3v3`, `lora-gnd` | ESP `3V3/GND` → rádio `VCC/GND` via J3V3/JGND | Alimentação do rádio | **Pendente crítica**: não aplicar 5 V; confirmar revisão/pads do rádio e a corrente contínua/pico do regulador. |
| `lora-sck`, `lora-mosi`, `lora-miso`, `lora-nss`, `lora-reset`, `lora-dio0` | GPIO4/6/5/10/21/20 → SCK/MOSI/MISO/NSS/RESET/DIO0 | Barramento SPI, reset e interrupção | A função lógica está coerente com SPI e GPIOs roteáveis do C3, mas os pads físicos do SX1278-SMT continuam **pendentes** da confirmação da peça. GPIO20/21 também compartilham as funções UART0 padrão. |
| `sensor-5v`, `sensor-gnd`, `sensor-trig` | ESP `5V/GND/GPIO1` → sensor `VCC/GND/TRIG` via J5V/JGND | Alimentação e disparo | Compatível com o manual do JSN-SR04T. Confirmar que a placa recebida é a mesma revisão AJ/JSN vista nas fotos. |
| `sensor-echo-hv1`, `level-lv1-gpio0` | `ECHO → HV1`, `LV1 → GPIO0` | Redução do ECHO de 5 V para 3,3 V | Coerente com a função HV1/LV1 do RoboCore. Manter o terra comum. Confirmar o pulso ECHO em osciloscópio/multímetro lógico após a primeira energização controlada. |
| `level-hv-5v`, `level-lv-3v3`, `level-gnd` | ESP `5V/3V3/GND` → `HV/LV/GND` via J5V/J3V3/JGND | Alimentação do conversor | Compatível com a documentação RoboCore. As três derivações agora são representadas como junções físicas, não como três conectores empilhados no mesmo pino. |

## Conexões corrigidas na aplicação

1. `J5V`, `J3V3` e `JGND` foram adicionadas como nós físicos de junção **soldada/borne** no 2D e 3D.
2. Os três ramos de terra, os dois ramos de 5 V e os dois ramos de 3,3 V passam por esses nós; cada nó está visualmente distinto dos jumpers encaixados.
3. A antena continua uma tarefa de **solda** no pad `ANT`; os sinais são **jumpers**; as derivações de alimentação requerem **junção soldada**.
4. O controlador ultrassônico passou a usar a referência dimensional de 41 × 29 mm do manual, em vez de 45 × 20 mm.
5. O rádio perdeu o status de geometria/pinagem verificada. A visualização continua útil como referência da foto, mas não afirma que o footprint é Ra-02.

## Riscos elétricos

- **Crítico — rádio em 3,3 V:** o Ra-02 publicado exige 3,3 V e informa até 105 mA. Não há confirmação da capacidade do regulador da placa Super Mini adquirida. Não energizar o rádio pelo pino 3V3 sem identificar o regulador e medir estabilidade sob carga.
- **Crítico — não ligar 5 V ao rádio:** os testes automatizados bloqueiam qualquer rota de 5 V para o componente `lora`.
- **Alto — revisão do rádio:** Ra-02 e SX1278-SMT não podem ser tratados como sinônimos de footprint. Conferir a serigrafia e continuidade de cada pad antes da solda.
- **Alto — ECHO:** o controlador trabalha em 5 V; ECHO deve passar pelo lado HV/LV do conversor, nunca direto ao GPIO0.
- **Médio — UART0:** GPIO20/GPIO21 têm funções padrão de UART0 no C3; confirmar que o firmware e a programação não disputam DIO0/RESET do rádio.
- **Médio — GPIO0:** conferir o comportamento de boot da placa recebida com o conversor conectado, mesmo não sendo um pino de strap listado para o C3.

## Inspeção física antes da primeira energização

1. Fotografe frente e verso da placa de rádio recebida, leia a referência e compare todos os pads com a serigrafia — sobretudo `3V3/VCC`, `GND`, `NSS`, `SCK`, `MOSI`, `MISO`, `RESET`, `DIO0` e `ANT`.
2. Identifique o CI regulador da Super Mini e sua corrente especificada; depois meça 3,3 V sem carga e com carga de teste adequada antes de conectar o rádio.
3. Confira com multímetro que J5V, J3V3 e JGND não têm continuidade entre si; confira continuidade apenas dentro de cada ramo.
4. Confirme a orientação do RoboCore pela serigrafia da placa real: HV4…HV1, HV, GND em uma fileira e LV4…LV1, LV, GND na outra.
5. Confirme no conector do sensor a ordem `5V, TRIG, ECHO, GND` e se a revisão impressa corresponde ao módulo mostrado.
6. Sem USB-C conectado, execute teste de continuidade de cada jumper ponta a ponta. Só depois conecte USB-C, com limitação de corrente se disponível.
