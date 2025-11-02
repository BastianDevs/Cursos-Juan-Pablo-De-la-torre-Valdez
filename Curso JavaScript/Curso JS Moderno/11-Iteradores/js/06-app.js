// forEarch

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const arreglo = pendientes.forEach((pendiente, index) => console.log(`${index} : ${pendiente}`));

// map crea un arreglo nuevo
const arreglo2 = pendientes.map((pendiente) => pendiente);

console.log(arreglo);
console.log(arreglo2);