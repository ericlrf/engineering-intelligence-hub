import './globals.css';
import Link from 'next/link';
export const metadata = { title: 'WEG Engineering Intelligence Hub', description: 'Portfólio técnico integrado' };
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="pt-BR"><body><div className="shell"><h1>Engineering Intelligence Hub</h1><p className="muted">Case de portfólio com dados sintéticos: OCR/LLMs, desenhos, dados/IA e HMI IoT.</p><nav className="nav"><Link href="/">Início</Link><Link href="/documents">Documentos</Link><Link href="/drawings">Desenhos</Link><Link href="/market">Mercado</Link><Link href="/hmi">HMI IoT</Link></nav>{children}</div></body></html>
}
