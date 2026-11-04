import { useState } from 'react';

export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = localStorage.getItem(chave);
      return salvo ? JSON.parse(salvo) : valorInicial;
    } catch {
      return valorInicial;
    }
  });

  function salvar(novoValor) {
    setValor(novoValor);
    try {
      localStorage.setItem(chave, JSON.stringify(novoValor));
    } catch {
      // ignore
    }
  }

  return [valor, salvar];
}
