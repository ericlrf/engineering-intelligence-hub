# Integração opcional com LLM

O case funciona sem credenciais externas. Para uma demonstração com LLM real, substitua o extrator baseado em regras por um adaptador que:

1. receba o texto/estrutura do documento;
2. use um schema de saída tipado;
3. retorne `null` quando a informação não estiver presente;
4. inclua evidência textual/página por campo;
5. registre versão do prompt, modelo e parâmetros;
6. execute um conjunto de avaliação antes de trocar a versão em produção.

Exemplo de contrato:

```json
{
  "model": "string|null",
  "power_kw": "number|null",
  "voltage_v": "number|null",
  "current_a": "number|null",
  "frequency_hz": "number|null",
  "evidence": [
    {"field": "power_kw", "source": "page:2:block:7", "text": "Potência 7,5 kW"}
  ]
}
```

Nunca considere JSON válido como sinônimo de conteúdo correto. Valide unidades, faixas e vínculo com a evidência.
