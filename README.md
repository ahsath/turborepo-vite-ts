# Turborepo + Vite + TS Starter

👷 **WIP**

This is a work in progress Turborepo starter project configured with Vite for apps and packages, it also has the minimal setup for linting with EsLint and code formatting with Prettier and is TypeScript ready.

There are missing configs when building the `ui` package, for instance I haven't found a way to get Vite's HMR to work consistently when using `ui` in build mode with the `--watch` flag, so, for now the package.json file `"main"` and `"types"` fields will point to `"main.ts"` for each app.

If needing to deploy your UI library you can however replace those settings with the contents of `ui/package-prod.json`, keep in mind you will have to do a full page refresh when editing files inside `ui/*`.

There is a package called `package-clean` that may help with that, sometime in the future I may add it, PRs are welcome though.

Remember to update your `"dev"` script for build mode and to generate types your UI library if needed.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `my-app`: a [Vue.js](https://vuejs.org/) app
- `ui`: an empty Vue.js configured component library shared by `my-app` application
- `eslint-config-custom`: `eslint` configurations (includes `@typescript-eslint`, `eslint-plugin-vue` and `@vue/eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Commands

```
cd turborepo-vite-ts

pnpm build
pnpm dev
pnpm lint
pnpm format
```
