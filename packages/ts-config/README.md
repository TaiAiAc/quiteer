# `@quiteer/ts-config`

TSConfigs for Vue projects to extend.

Requires TypeScript >= 4.5.

Install:

```sh
npm add -D @quiteer/ts-config
```

Add one of the available configurations to your `tsconfig.json`:

The base configuration (runtime-agnostic):

```json
"extends" : "@quiteer/ts-config/tsconfig.json"
```

Configuration for Browser environment:

```json
"extends": "@quiteer/ts-config/tsconfig.web.json"
```

Configuration for Node environment:

```json
"extends": "@quiteer/ts-config/tsconfig.node.json"
```
