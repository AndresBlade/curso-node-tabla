"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearArchivoTabla = void 0;
const fs_1 = __importDefault(require("fs"));
const safe_1 = __importDefault(require("colors/safe"));
// export const crearArchivoTabla: (base: number) => Promise<string> = async (
const crearArchivoTabla = (base, listar, hasta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${safe_1.default.blue(base.toString())} x ${safe_1.default.green(i.toString())} = ${safe_1.default.yellow((base * i).toString())}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        fs_1.default.mkdirSync('./tablas', { recursive: true });
        fs_1.default.writeFileSync(`tablas/tabla del ${base}.txt`, salida);
        // throw new Error('Lolazo la verdad');
        if (listar) {
            console.log(safe_1.default.yellow('=========================='));
            console.log(safe_1.default.italic(safe_1.default.yellow(`Tabla del ${base}`)));
            console.log(safe_1.default.yellow('=========================='));
            console.log(consola);
        }
        // return salida;
    }
    catch (error) {
        const e = error;
        // return `Ha ocurrido un error: ${e.message}`;
        throw `Ha ocurrido un error: ${e.message}`;
    }
});
exports.crearArchivoTabla = crearArchivoTabla;
//# sourceMappingURL=multiplicar.js.map