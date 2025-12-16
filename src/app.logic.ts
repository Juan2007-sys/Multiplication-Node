
import * as fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b:base, l:limit, s:show } = yarg;


let outputMessage: string = '';

const headerMessage = `
===========================
   Tabla del  ${ base }
===========================\n
`;

for (let i = 1; i <= limit; i++){
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (show){
    
    console.log(outputMessage);
}

const outputPath = `output`



fs.mkdirSync('./output', { recursive: true });
fs.writeFileSync(`./output/tabla-${base}.txt`, headerMessage + outputMessage);
console.log('File created successfully');

// grabar en el archivo de salida
// path => output/tabla-5.txt

