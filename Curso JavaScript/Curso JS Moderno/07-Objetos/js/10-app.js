const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

// Unir 2 objetos (Los copia y crea uno nuevo)
const resultado = Object.assign(producto, medidas);

// Spreed Operator o Rest Operator
const resultado2 = {...producto, ...medidas}

console.log(resultado);
console.log(resultado2);