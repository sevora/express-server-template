# Express + Typescript Server Template
## Overview
This is a template that minimally configures Express and TypeScript together. There are additional files such as ways to extend the Express Request object and to define the environment variables within TypeScript.

## Commands
- `npm run dev` is the command to run the TypeScript source code directly in Node environment.
- `npm run build` is the command to transpile the server code into JavaScript in the build folder.
- `npm start` is the command to run the transpiled code in the build folder through Node.
  
In a production environment, one would normally use a method other than `npm start` through packages such as pm2 or nodemon.

## Configuration
- `types/index.d.ts` is the file where you can extend the Express Request object.
- `environment.d.ts` is the file where you can define the environment variables type definitions.
