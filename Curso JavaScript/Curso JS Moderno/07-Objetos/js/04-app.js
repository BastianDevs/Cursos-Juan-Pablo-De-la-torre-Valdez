const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;

console.log(producto);

// Destructuring: Extraer el valor del objeto y crea la variable
const {nombre, precio, disponible} = producto;