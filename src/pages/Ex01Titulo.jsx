import { useEffect, useState } from 'react';

export default function Ex01Titulo() {
  const [cliques, setCliques] = useState(0);

  useEffect(() => {
    document.title = `Cliques: ${cliques} | Laboratório React`;
    return () => {
      document.title = 'Laboratório React: Hooks e Context';
    };
  }, [cliques]);

  return (
    <section className="panel">
      <span className="eyebrow">Exercício 01 · useEffect</span>
      <h1>Contador que altera o título da aba</h1>
      <p>Observe o título da aba do navegador ao clicar.</p>
      <p className="metric">{cliques} clique(s)</p>
      <div className="actions">
        <button onClick={() => setCliques((v) => v + 1)}>Adicionar clique</button>
        <button className="secondary" onClick={() => setCliques(0)}>Zerar contador</button>
      </div>
    </section>
  );
}
