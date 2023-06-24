"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.argv = void 0;
const yargs_1 = __importDefault(require("yargs"));
exports.argv = (0, yargs_1.default)(process.argv.slice(2))
    .options({
    b: {
        type: 'number',
        alias: 'base',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar',
    },
    l: {
        type: 'boolean',
        alias: 'listar',
        default: false,
        describe: 'Muestra la tabla en consola',
    },
    h: {
        type: 'number',
        alias: 'hasta',
        default: 10,
        describe: 'Hasta donde llega la tabla',
    },
})
    .check(argv => {
    if (isNaN(argv.b))
        throw 'La base tiene que ser un número';
    if (isNaN(argv.h))
        throw 'el tope tiene que ser un número';
    if (argv.h <= 0)
        throw 'El tope debe ser mayor a 0';
    // console.log(typeof argv.l);
    if (typeof argv.l !== 'boolean')
        throw 'Listar debe de ser un booleano';
    return true;
})
    .parseSync();
//# sourceMappingURL=yargs.js.map