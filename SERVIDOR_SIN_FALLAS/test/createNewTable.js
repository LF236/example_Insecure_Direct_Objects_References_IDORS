const fs = require('fs');
const file_data_empleado = './listaEmpleados.json';

const dataJson = JSON.parse(fs.readFileSync(file_data_empleado, 'utf-8'));

const random = (max = 0, min = 9) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const tarjetaFalsa = () => {
    const string = `${random()}${random()}${random()}${random()} ${random()}${random()}${random()}${random()} ${random()}${random()}${random()}${random()}`
    return string;
}

const vigenciaFalsa = () => {
    return `${random(1, 12)}/${random(2021,2025)}`
}

let data = "";
dataJson.forEach(empleado => {
    const primerasLetrasNombre = empleado.nombres[0] + empleado.nombres[1] + empleado.nombres[1];
    const correoFalso = `${empleado.primer_apellido}_${empleado.segundo_apellido}_${primerasLetrasNombre}@empresaFalsa.com`;
    const QUERY = `INSERT INTO InfoEmpleado VALUES(${empleado.id}, "${correoFalso}", "${tarjetaFalsa()}", "${vigenciaFalsa()}");\n`;
    data += QUERY;
    
    //console.log(QUERY);
})

console.log(data);

fs.writeFileSync('./data.sql', data);

