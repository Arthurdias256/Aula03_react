import { useContext } from 'react';
import { ThemeContext, TEMAS } from '../context/ThemeContext.jsx';

export default function Ex03Context() {
  const { tema, setTema } = useContext(ThemeContext);

  return (
    <section className="panel">
      <span className="eyebrow">Exercício 03 · Context API</span>
      <h1>Tema compartilhado</h1>
      <p>Tema atual: <strong>{tema}</strong></p>
      <div className="actions">
        {TEMAS.map((t) => (
          <button key={t} className={t === tema ? '' : 'secondary'} onClick={() => setTema(t)}>
            {t}
          </button>
        ))}
      </div>
      <p className="muted">
        Navegue para outro exercício: o tema permanece porque o ThemeProvider fica acima do React Router.
      </p>
    </section>
  );
}
