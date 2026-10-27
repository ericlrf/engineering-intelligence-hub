import re
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="WEG Engineering Intelligence AI Service", version="0.1.0")

class TextPayload(BaseModel):
    text: str

class Telemetry(BaseModel):
    deviceId: str
    frequencyHz: float
    rpm: float
    voltageV: float
    currentA: float
    temperatureC: float

def _num(pattern: str, text: str):
    m = re.search(pattern, text, re.I)
    if not m:
        return None
    return float(m.group(1).replace(',', '.'))

@app.get('/health')
def health():
    return {"status": "ok"}

@app.post('/extract/specification')
def extract_spec(payload: TextPayload):
    text = payload.text
    model = re.search(r'(?:modelo|model)\s*[:\-]\s*([A-Za-z0-9\-_.]+)', text, re.I)
    result = {
        "model": model.group(1) if model else None,
        "power_kw": _num(r'(?:pot[eê]ncia|power)\s*[:\-]?\s*([0-9]+(?:[\.,][0-9]+)?)\s*kW', text),
        "voltage_v": _num(r'(?:tens[aã]o|voltage)\s*[:\-]?\s*([0-9]+(?:[\.,][0-9]+)?)\s*V', text),
        "current_a": _num(r'(?:corrente|current)\s*[:\-]?\s*([0-9]+(?:[\.,][0-9]+)?)\s*A', text),
        "frequency_hz": _num(r'(?:frequ[eê]ncia|frequency)\s*[:\-]?\s*([0-9]+(?:[\.,][0-9]+)?)\s*Hz', text),
        "evidence": []
    }
    for key, value in list(result.items()):
        if key != 'evidence' and value is not None:
            result['evidence'].append({"field": key, "value": value, "source": "input_text"})
    result['missing_fields'] = [k for k in ['model','power_kw','voltage_v','current_a','frequency_hz'] if result[k] is None]
    return result

@app.post('/anomaly/telemetry')
def telemetry_anomaly(t: Telemetry):
    reasons = []
    if t.temperatureC > 85:
        reasons.append('high_temperature')
    if t.currentA > 30:
        reasons.append('high_current')
    if not 45 <= t.frequencyHz <= 65:
        reasons.append('frequency_out_of_range')
    return {"anomaly": bool(reasons), "reasons": reasons}

@app.post('/nlp/keywords')
def keywords(payload: TextPayload):
    words = re.findall(r'[A-Za-zÀ-ÿ]{5,}', payload.text.lower())
    stop = {'sobre','entre','para','com','uma','mais','dados','mercado','tecnologia'}
    counts = {}
    for w in words:
        if w not in stop:
            counts[w] = counts.get(w, 0) + 1
    top = sorted(counts.items(), key=lambda x: (-x[1], x[0]))[:10]
    return {"keywords": [{"term": k, "count": v} for k, v in top]}
