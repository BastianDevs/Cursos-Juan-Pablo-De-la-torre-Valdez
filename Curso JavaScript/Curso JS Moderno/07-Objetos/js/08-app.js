"use strict"; // Exige que se cumplan ciertas reglas

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Object.freeze 'congela', no permite que se modifique el objeto
Object.freeze(producto);

producto.disponible = false;
producto.imagen = "imagen.jpg";

console.log(producto);

// Saber si esta restringido
console.log(Object.isFrozen(producto));