import { useCounter } from '../hooks/useCounter.js';

export default function Ex04Counter() {
  const { contador, incrementar, somar5, zerar } = useCounter(0);

  return (
    <section className="panel">
      <span className="eyebrow">Exercício 04 · Custom Hook</span>
      <h1>Contador com hook customizado</h1>
      <p className="metric">{contador}</p>
      <div className="actions">
        <button onClick={incrementar}>+1</button>
        <button onClick={somar5}>+5</button>
        <button className="secondary" onClick={zerar}>Zerar</button>
      </div>
    </section>
  );
}
