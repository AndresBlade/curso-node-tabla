import yargs from 'yargs';

export const argv = yargs(process.argv.slice(2))
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
		if (isNaN(argv.b)) throw 'La base tiene que ser un número';
		if (isNaN(argv.h)) throw 'el tope tiene que ser un número';
		if (argv.h <= 0) throw 'El tope debe ser mayor a 0';
		// console.log(typeof argv.l);
		if (typeof argv.l !== 'boolean') throw 'Listar debe de ser un booleano';

		return true;
	})

	.parseSync();
