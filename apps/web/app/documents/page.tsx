'use client';
import {useState} from 'react';
const api=process.env.NEXT_PUBLIC_API_URL||'http://localhost:3001';
const sample='Modelo: CFW-DEMO-75\nPotência: 7,5 kW\nTensão: 380 V\nCorrente: 12 A\nFrequência: 60 Hz';
export default function Documents(){const [text,setText]=useState(sample);const [result,setResult]=useState<any>(null);async function run(){const r=await fetch(`${api}/documents/extract`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({filename:'specification-demo.txt',text})});setResult(await r.json())}return <main><div className="card"><h2>Extração de especificação técnica</h2><textarea rows={8} value={text} onChange={e=>setText(e.target.value)}/><button onClick={run}>Extrair e registrar</button></div>{result&&<div className="card"><h3>Resultado</h3><pre>{JSON.stringify(result,null,2)}</pre></div>}</main>}
