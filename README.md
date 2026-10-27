#   Engineering Intelligence Hub

Case de portfólio que integra, em um único produto, competências de quatro oportunidades  Industria/Inovacao:

1. **OCR + LLMs** para leitura e extração de especificações técnicas;
2. **Geração automatizada de desenhos** para aprovação de engenharia;
3. **Ciência de Dados e IA** para inteligência mercadológica e tecnológica;
4. **IoT + HMI** para telemetria e integração com software executado em Linux.

> **Escopo de demonstração:** este repositório usa dados sintéticos e serviços simulados. Não representa arquitetura interna, dados ou processos proprietários da  .

## Visão do caso de uso

Uma empresa industrial recebe especificações técnicas em PDF/imagem, precisa transformar essas informações em dados estruturados, gerar um desenho preliminar para aprovação, acompanhar sinais de um inversor de frequência e consolidar indicadores de mercado/tecnologia.

O **Engineering Intelligence Hub** centraliza esse fluxo:

```text
PDF/Imagem -> OCR/Extração -> LLM/Validação -> Banco SQL
                                      |          |
                                      |          +-> Indicadores de mercado
                                      |
                                      +-> Geração SVG/PDF de desenho

MQTT/Telemetria -> API IoT -> HMI React/Next.js -> Alertas/Anomalias
```

## Stack

### Front-end
- Next.js
- React
- TypeScript
- HTML/CSS

### Back-end
- Node.js
- NestJS
- REST API
- Prisma ORM
- PostgreSQL

### IA e dados
- Python
- FastAPI
- OCR/document parsing (adaptador demonstrativo)
- Extração estruturada compatível com LLM
- Pipeline de dados não estruturados
- Indicadores e detecção simples de anomalias

### IoT
- MQTT
- Simulador de inversor em Python
- Tópicos de telemetria
- HMI web
- Serviço preparado para execução em Linux

### DevOps e qualidade
- Docker / Docker Compose
- GitHub Actions
- Testes automatizados
- ESLint
- Pytest

## Como cada vaga é contemplada

| Vaga | Evidência no projeto |
|---|---|
| IA Full Stack – OCR e LLMs | Upload de documento, OCR, schema estruturado, prompt template, validação, tela de revisão, métricas de extração |
| Geração Automatizada de Desenhos | NestJS REST, React/Next.js, SQL/PostgreSQL, Prisma, versionamento de revisão, SVG paramétrico, testes, Docker/CI |
| Ciência de Dados e IA | Pipeline de ingestão, normalização, indicadores de mercado, análise de texto não estruturado, API Python, exportação CSV para BI |
| IoT e IA / HMI | MQTT, telemetria, web server/API em Linux, dashboard HMI, integração de ferramentas e detecção simples de anomalias |

## Estrutura

```text
apps/
  web/                 # Next.js / React / TypeScript
  api/                 # NestJS / Prisma / PostgreSQL
services/
  ai-service/          # FastAPI / Python / IA / OCR / analytics
  iot-simulator/       # Simulador MQTT de inversor
packages/
  shared/              # Schemas e contratos compartilhados
infra/
  node-red/            # Fluxo opcional low-code
.github/workflows/     # CI
 docs/                 # Arquitetura, roteiro de demo e avaliação
 data/sample/          # Dados sintéticos
```

## Fluxos demonstráveis

### 1. Documento técnico -> dados estruturados
- Upload de um documento sintético.
- Extração de campos: potência, tensão, corrente, frequência, modelo e observações.
- Validação de unidade e formato.
- Registro da evidência textual por campo.
- Revisão humana na interface.

### 2. Dados estruturados -> desenho de aprovação
- Seleção de uma revisão de especificação.
- Geração de SVG paramétrico com dimensões e bloco de identificação.
- Registro de revisão e status: `DRAFT`, `UNDER_REVIEW`, `APPROVED`, `REJECTED`.

### 3. Inteligência de mercado
- Importação de um CSV sintético de mercado.
- Agregações por segmento, ano e tecnologia.
- Extração de palavras-chave de notícias/textos.
- Endpoint de indicadores e exportação para Power BI/Excel.

### 4. HMI IoT
- Simulador publica RPM, corrente, tensão, temperatura e frequência via MQTT.
- API armazena a última leitura.
- HMI exibe telemetria e status de comunicação.
- Serviço de IA sinaliza anomalia simples por z-score/regras.

## Execução local

### Pré-requisitos
- Docker Desktop ou Docker Engine + Docker Compose
- Node.js 20+
- Python 3.11+

### Subir a stack

```bash
docker compose up --build
```

Serviços planejados:
- Web: `http://localhost:3000`
- API NestJS: `http://localhost:3001`
- AI Service: `http://localhost:8000`
- PostgreSQL: `localhost:5432`
- MQTT: `localhost:1883`
- Node-RED (opcional): `http://localhost:1880`

## Demo rápida para entrevista

1. Abrir `/documents` e processar uma especificação sintética.
2. Revisar os campos extraídos.
3. Abrir `/drawings` e gerar uma revisão de desenho.
4. Abrir `/market` e mostrar indicadores de mercado.
5. Rodar o simulador IoT e abrir `/hmi` para acompanhar telemetria.
6. Mostrar `docker-compose.yml`, testes e workflow de CI.

## Critérios de avaliação do case

### OCR/LLM
- acurácia por campo;
- taxa de campos ausentes corretamente identificados;
- rastreabilidade da evidência;
- tempo de processamento.

### Desenhos
- consistência entre revisão de parâmetros e desenho;
- reprodutibilidade;
- rejeição de combinações inválidas.

### Dados/IA
- qualidade do pipeline;
- completude e duplicidade;
- atualização dos indicadores;
- explicabilidade das conclusões.

### IoT
- atualização da HMI;
- detecção de dados obsoletos;
- comportamento após queda/reconexão;
- consumo de recursos no Linux.

## Roadmap

- [x] Arquitetura e contratos
- [x] API NestJS inicial
- [x] Serviço Python inicial
- [x] UI Next.js inicial
- [x] Simulador MQTT
- [x] Docker Compose
- [x] CI
- [ ] OCR real com Tesseract/Docling
- [ ] Integração opcional com API de LLM
- [ ] Persistência completa de telemetria em TimescaleDB
- [ ] Exportação PDF do desenho
- [ ] Dashboard Power BI publicado
- [ ] Benchmark de latência em hardware ARM/Linux embarcado

## Segurança e privacidade

O projeto utiliza somente dados sintéticos. Para produção, incluir:
- autenticação e autorização por perfil;
- trilha de auditoria;
- criptografia de segredos;
- retenção e classificação de dados;
- revisão das obrigações de LGPD e segurança corporativa.

## Licença

MIT para fins de portfólio e demonstração.
