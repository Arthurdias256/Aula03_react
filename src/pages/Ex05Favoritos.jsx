import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

export default function Ex05Favoritos() {
  const [favoritos, setFavoritos] = useLocalStorage('favoritos', []);
  const [novo, setNovo] = useState('');

  function adicionar() {
    if (!novo.trim()) return;
    setFavoritos([...favoritos, novo.trim()]);
    setNovo('');
  }

  function limparTodos() {
    setFavoritos([]);
  }

  return (
    <section className="panel">
      <span className="eyebrow">Exercício 05 · Integração</span>
      <h1>Favoritos persistentes</h1>
      <div className="actions">
        <input value={novo} onChange={(e) => setNovo(e.target.value)} placeholder="Novo favorito" />
        <button onClick={adicionar}>Adicionar</button>
        <button className="secondary" onClick={limparTodos}>Limpar todos</button>
      </div>
      <ul>
        {favoritos.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="muted">
        Troque de rota e atualize a página: os favoritos continuam salvos.
      </p>
    </section>
  );
}
