# Setup instructions

To run the project we need to have Node installed. The project uses `nvm` for Node version managment. Either install `nvm` using instructions [here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) or install the version specified in `.nvmrc` from the official [site](https://nodejs.org/en/download). If you choose to use `nvm`, after install, `cd` into the project and run `cat .nvmrc` and you should see the current version. After this run `nvm install {currentversion}` and you should see:

```bash
Now using node {currentversion} (npm {currentversion}})
```
* Note that `pnpm env` can be used to manage node version but it requires standalone script install and a clean system (no Node installed). 

Next we need to install pnpm using:

```bash
npm i -g pnpm
```

Then install dependecies using `pnpm install`.

# Running scripts 

The project uses [Biome](https://biomejs.dev/) for both formating and linting with the recomended settings.

Format or check formating using:

```bash
pnpm format-check
pnpm format
```
Run linter using:

```bash
pnpm lint
```

The dev scripts runs the development build of react:

```bash
pnpm dev
```

Build the project using the build command:

```bash
pnpm build
```

And preview /dist build using the preview command:

```bash
pnpm preview
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
