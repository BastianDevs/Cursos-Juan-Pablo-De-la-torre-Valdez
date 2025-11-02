const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Aunque el objeto sea cons, se puede modificar sus propiedades
producto.disponible = false;
delete producto.precio;

console.log(producto);

