<div align="center">

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/bsshenrique/nodejs-typescript/main)
![Static Badge](https://img.shields.io/badge/Node.js-LTS-brightgreen)

</div>

# Node.js TypeScript
Exemplo/boilerplate para usar o Node.js com TypeScript.

## Motivação
O repositório tem o único objetivo de demonstrar uma maneira bem simples de como utilizar o Node.js com TypeScript.

Certamente existem diferentes formas e configurações para isso, mas essa provavelmente atenderá a maioria das necessidades e prioriza a simplicidade, afinal, *KISS*.

## VSCode
Considerando que o `nvm` está sendo usado, crie algo como:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "runtimeVersion": "versão do node utilizada",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/index.ts",
      "runtimeArgs": [
        "--import",
        "data:text/javascript,import { register } from 'node:module'; import { pathToFileURL } from 'node:url'; register('ts-node/esm', pathToFileURL('./'));",
      ],
      "args": [
        "${workspaceFolder}/index.ts"
      ]
    }
  ]
}
```
