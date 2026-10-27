import json
import math
import random
import time
import requests

API = 'http://localhost:3001/hmi/telemetry'
DEVICE = 'inverter-demo-01'

for i in range(300):
    frequency = 60 + math.sin(i / 10) * 2
    current = 12 + random.uniform(-1.2, 1.2)
    temperature = 48 + math.sin(i / 20) * 4 + random.uniform(-0.5, 0.5)
    if i in (75, 180):
        temperature = 92
        current = 34
    sample = {
        'deviceId': DEVICE,
        'frequencyHz': round(frequency, 2),
        'rpm': round(frequency * 29.2, 1),
        'voltageV': 380,
        'currentA': round(current, 2),
        'temperatureC': round(temperature, 2),
    }
    print(json.dumps(sample, ensure_ascii=False))
    try:
        requests.post(API, json=sample, timeout=2)
    except requests.RequestException:
        pass
    time.sleep(1)
