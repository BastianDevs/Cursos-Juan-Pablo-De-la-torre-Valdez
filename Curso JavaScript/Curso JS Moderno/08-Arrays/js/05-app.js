const meses = ['Enero', 'Febrero', 'Marzo'];

// Agregar al final de larreglo
meses.push('Abril');


console.table(meses);

const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

// push agrega al final de un arreglo
// Forma imperativa
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// Agrega al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);