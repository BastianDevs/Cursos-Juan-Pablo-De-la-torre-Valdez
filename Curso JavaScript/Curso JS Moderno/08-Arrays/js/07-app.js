// Forma imperativa modifica el objeto actual, declarativa crea una copia
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

const producto4 = {
    nombre: "Teclado 2",
    precio: 50
}

carrito.push(producto3);
carrito.push(producto4);
/*
// Agrega al inicio del arreglo
carrito.unshift(producto3);
console.table(carrito);

//Eliminar ultimo elemento de un arreglo...
carrito.pop();
console.log(carrito);

// Eliminar del inicio del arreglo
carrito.shift();
console.log(carrito);
*/

// Elimina el elemento de la posicion y cantidad indicada con splite
carrito.splice(1, 1);
console.log(carrito);