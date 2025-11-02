"use strict"; // Exige que se cumplan ciertas reglas

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Object.seel 'sellar', no permite agregar ni eliminar propiedades, pero si modificar las existentes
Object.seal(producto);

producto.disponible = false;
//producto.imagen = "imagen.jpg";

console.log(producto);

// Saber si esta restringido
console.log(Object.isSealed(producto));