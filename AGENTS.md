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

## Sequência didática

| # | Rota | Conceito | Resultado |
|---|------|----------|-----------|
| 1 | /exercicio-1 | useEffect + dependências | título da aba acompanha cliques |
| 2 | /exercicio-2 | useEffect + cleanup | largura da janela em tempo real |
| 3 | /exercicio-3 | createContext / useContext | tema claro/escuro global |
| 4 | /exercicio-4 | useCounter | mesma lógica, dois estados independentes |
| 5 | /exercicio-5 | useLocalStorage + Context | favoritos persistentes |


- Componentes/páginas em `pages/` são exercícios numerados (Ex01...).
- Hooks reutilizáveis ficam em `hooks/`.
- Contextos globais ficam em `context/`.
- Estilos globais em `src/styles.css`.
