import { useEffect, useState } from 'react';

export default function Ex02Resize() {
  const [largura, setLargura] = useState(window.innerWidth);
  const [altura, setAltura] = useState(window.innerHeight);

  useEffect(() => {
    function atualizar() {
      setLargura(window.innerWidth);
      setAltura(window.innerHeight);
    }
    window.addEventListener('resize', atualizar);
    return () => window.removeEventListener('resize', atualizar);
  }, []);

  return (
    <section className="panel">
      <span className="eyebrow">Exercício 02 · useEffect + cleanup</span>
      <h1>Monitor de tamanho da janela</h1>
      <p>Redimensione o navegador e acompanhe as medidas:</p>
      <p className="metric">{largura} x {altura} px</p>
      <p>{largura < 768 ? '📱 Tela estreita' : '🖥️ Tela larga'}</p>
    </section>
  );
}
