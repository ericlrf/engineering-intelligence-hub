# Execução em Linux / cenário embarcado

O protótipo pode ser demonstrado em Linux x86_64 e depois validado em ARM, caso haja hardware disponível.

## Checklist
- arquitetura de CPU e SO;
- memória/armazenamento disponíveis;
- navegador da HMI;
- inicialização automática;
- logs com rotação;
- health check;
- reinício controlado;
- operação offline da interface;
- benchmark de CPU/memória.

## Exemplo systemd

```ini
[Unit]
Description=Engineering Hub API
After=network.target

[Service]
WorkingDirectory=/opt/engineering-hub/api
ExecStart=/usr/bin/node dist/main.js
Restart=on-failure
RestartSec=3
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```
