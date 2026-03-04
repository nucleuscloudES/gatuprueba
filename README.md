# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploy en GitHub Pages

Este proyecto ya está configurado para desplegar en GitHub Pages del repositorio `gatuprueba`.

### Opción 1 (automática con GitHub Actions)

- Al hacer push a `main`, se ejecuta el workflow [deploy-pages.yml](.github/workflows/deploy-pages.yml) y publica la carpeta `dist`.
- Debes tener GitHub Pages habilitado en **Settings > Pages** con **Source: GitHub Actions**.

### Opción 2 (manual con script)

1. Instala dependencias:

	```bash
	npm install
	```

2. Publica en GitHub Pages:

	```bash
	npm run deploy
	```

3. En GitHub, revisa en **Settings > Pages** que la fuente sea la rama `gh-pages`.

URL esperada:

`https://nucleuscloudes.github.io/gatuprueba/`