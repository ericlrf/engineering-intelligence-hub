from app.main import extract_spec, telemetry_anomaly, TextPayload, Telemetry

def test_extract_spec():
    r = extract_spec(TextPayload(text='Modelo: CFW-DEMO Potência: 7,5 kW Tensão: 380 V Corrente: 12 A Frequência: 60 Hz'))
    assert r['model'] == 'CFW-DEMO'
    assert r['power_kw'] == 7.5
    assert r['frequency_hz'] == 60
    assert r['missing_fields'] == []

def test_anomaly():
    r = telemetry_anomaly(Telemetry(deviceId='inv-01', frequencyHz=60, rpm=1750, voltageV=380, currentA=35, temperatureC=90))
    assert r['anomaly'] is True
