/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);
export const TEMAS = ['claro', 'escuro', 'azul'];

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro');

  function alternarTema() {
    setTema((anterior) => {
      const i = TEMAS.indexOf(anterior);
      return TEMAS[(i + 1) % TEMAS.length];
    });
  }

  return (
    <ThemeContext.Provider value={{ tema, setTema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
