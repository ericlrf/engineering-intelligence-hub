# Matriz de aderência às quatro oportunidades WEG

## 1. Pesquisador(a) em IA e Desenvolvimento Full Stack — OCR e LLMs

| Requisito | Evidência no repositório |
|---|---|
| IA | `services/ai-service` |
| OCR / extração de documentos | endpoint `/extract/specification` e fluxo `/documents` |
| Engenharia de prompts / avaliação | estrutura preparada para adaptador LLM; métricas em `docs/evaluation-plan.md` |
| Full stack | Next.js + NestJS + PostgreSQL |
| SQL | Prisma/PostgreSQL |
| React / Next.js | `apps/web` |
| APIs de LLM | ponto de extensão documentado em `docs/llm-integration.md` |
| JavaScript/TypeScript | front-end e API |
| NoSQL / séries temporais | telemetria modelada; roadmap para TimescaleDB |
| Redes / IoT / low code | MQTT + Node-RED |
| Processos de fabricação | especificação técnica, desenho e inversor simulados |

## 2. Geração Automatizada de Desenhos para Aprovação

| Requisito | Evidência |
|---|---|
| Node.js/NestJS | `apps/api` |
| APIs REST | controllers NestJS |
| React/Next.js | `apps/web` |
| SQL | PostgreSQL |
| Git | repositório estruturado para versionamento |
| TypeScript | API e web |
| Prisma/ORM | `apps/api/prisma/schema.prisma` |
| Testes | pytest + plano Jest |
| CI/CD | `.github/workflows/ci.yml` |
| Docker | Dockerfiles + Compose |
| Prova de conceito | fluxo de revisão de desenho SVG |

## 3. Pesquisador em Ciência de Dados e IA

| Requisito | Evidência |
|---|---|
| Banco de dados | PostgreSQL |
| Python | FastAPI + simulador |
| SQL | persistência e indicadores |
| IA | extração/NLP/anomalia |
| Pipelines | ingestão de dados de mercado e documentos |
| Plataforma de indicadores | página `/market` |
| Dados não estruturados | documentos técnicos + endpoint de keywords |
| Excel/Power BI | CSV de saída e integração documentada |

## 4. Desenvolvimento de Software para IoT e IA

| Requisito | Evidência |
|---|---|
| IoT | telemetria de inversor e MQTT |
| Sistemas embarcados | deployment Linux documentado |
| React/HTML/CSS | HMI em Next.js |
| JavaScript/Python | web/API e simulador |
| Rust | extensão proposta, não simulada como experiência existente |
| Linux embarcado | systemd e deployment descritos |
| Web server | NestJS/Next.js e serviço Python |
| Integração de ferramentas | MQTT -> API -> banco -> HMI |
