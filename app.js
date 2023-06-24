"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplicar_1 = require("./helpers/multiplicar");
const yargs_1 = require("./config/yargs");
console.clear();
// const base: number = 8;
// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const baseString: string | undefined = arg3.split('=')[1];
// let base: number = baseString === undefined ? 5 : parseInt(baseString);
// console.log(process.argv);
console.log(yargs_1.argv);
console.log('base: yargs', yargs_1.argv.b);
(0, multiplicar_1.crearArchivoTabla)(yargs_1.argv.b, yargs_1.argv.l, yargs_1.argv.h);
//# sourceMappingURL=app.js.map