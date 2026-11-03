# Aula03_react

Projeto de estudo em React (Vite) focado em:

- **Context API** (tema, estado compartilhado)
- **Hooks** (custom hooks como `useCounter`, `useLocalStorage`)
- **React Router** (navegação entre páginas/exercícios)

## Estrutura

```
src/
├── main.jsx
├── App.jsx
├── styles.css
├── context/ThemeContext.jsx
├── hooks/useCounter.js
├── hooks/useLocalStorage.js
└── pages/
    ├── Home.jsx
    ├── Ex01Titulo.jsx
    ├── Ex02Resize.jsx
    ├── Ex03Context.jsx
    ├── Ex04Counter.jsx
    └── Ex05Favoritos.jsx
```

## Scripts

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera build de produção
- `npm run lint` — executa o linter
- `npm run preview` — pré-visualiza o build

## Convenções

- Componentes/páginas em `pages/` são exercícios numerados (Ex01...).
- Hooks reutilizáveis ficam em `hooks/`.
- Contextos globais ficam em `context/`.
- Estilos globais em `src/styles.css`.
