const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 200},
    {nombre: 'Television', precio: 200},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 500}
]

// map va a crear un nuevo arreglo
const nuevoArreglo = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

const nuevoArreglo2 = carrito.forEach(producto => `${producto.nombre} - ${producto.precio}`);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);