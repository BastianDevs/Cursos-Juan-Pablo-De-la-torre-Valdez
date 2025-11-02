const producto = 'Monitor 20 Pulgadas ';
const precio = "30 USD";

// Concatenar strings
console.log(producto.concat(precio));
console.log(producto.concat("En descuento"));

console.log(producto + "Con un preico de: " + precio);
console.log(producto, "Con un preico de: ", precio);

// Template string
console.log(`El Producto ${producto}tiene un precio de ${precio}`)