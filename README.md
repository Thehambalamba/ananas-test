# Setup instructions

To run the project we need to have Node installed. The project uses `nvm` for Node version management. Either install `nvm` using instructions [here](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) or install the version specified in `.nvmrc` from the official [site](https://nodejs.org/en/download). If you choose to use `nvm`, after installing, `cd` into the project and run `cat .nvmrc` and you should see the current version. After this run `nvm install {currentversion}` and you should see:

```bash
Now using node {currentversion} (npm {currentversion}})
```
* Note that `pnpm env` can be used to manage Node version but it requires a standalone script install and a clean system (no Node installed). 

Next, we need to install `pnpm` using:

```bash
npm i -g pnpm
```

Then install dependencies using `pnpm install`.

# Running scripts 

The project uses [Biome](https://biomejs.dev/) for both formatting and linting with the recommended settings.

Format or check formatting using:

```bash
pnpm format-check
pnpm format
```
Run linter using:

```bash
pnpm lint
```

The dev scripts run's the development build of react:

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
