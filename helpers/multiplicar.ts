import fs from 'fs';
import colors from 'colors/safe';

// export const crearArchivoTabla: (base: number) => Promise<string> = async (

export const crearArchivoTabla = async (
	base: number,
	listar: boolean,
	hasta: number
): Promise<void> => {
	try {
		let salida: string = '';
		let consola: string = '';
		for (let i: number = 1; i <= hasta; i++) {
			consola += `${colors.blue(base.toString())} x ${colors.green(
				i.toString()
			)} = ${colors.yellow((base * i).toString())}\n`;
			salida += `${base} x ${i} = ${base * i}\n`;
		}

		fs.mkdirSync('./tablas', { recursive: true });
		fs.writeFileSync(`tablas/tabla del ${base}.txt`, salida);

		// throw new Error('Lolazo la verdad');

		if (listar) {
			console.log(colors.yellow('=========================='));
			console.log(colors.italic(colors.yellow(`Tabla del ${base}`)));
			console.log(colors.yellow('=========================='));
			console.log(consola);
		}

		// return salida;
	} catch (error: unknown) {
		const e: Error = error as Error;
		// return `Ha ocurrido un error: ${e.message}`;
		throw `Ha ocurrido un error: ${e.message}`;
	}
};
