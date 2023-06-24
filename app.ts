import { crearArchivoTabla } from './helpers/multiplicar';

import { argv } from './config/yargs';

console.clear();

// const base: number = 8;

// console.log(process.argv);

// const [, , arg3 = 'base=5'] = process.argv;

// const baseString: string | undefined = arg3.split('=')[1];

// let base: number = baseString === undefined ? 5 : parseInt(baseString);

// console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.b);

crearArchivoTabla(argv.b, argv.l, argv.h);
