import { useState } from 'react';

export function useCounter(valorInicial = 0) {
  const [contador, setContador] = useState(valorInicial);

  function incrementar() {
    setContador((v) => v + 1);
  }
  function somar5() {
    setContador((v) => v + 5);
  }
  function zerar() {
    setContador(0);
  }

  return { contador, incrementar, somar5, zerar };
}
