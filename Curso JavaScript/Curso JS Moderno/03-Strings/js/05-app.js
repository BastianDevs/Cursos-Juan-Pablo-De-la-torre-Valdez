const producto = 'Monitor 20 Pulgadas';

console.log(producto);

// replace es para reemplazar
console.log(producto.replace("Pulgadas", '"'));
console.log(producto.replace("Pulgadas", 'Monitor Curvo'));

// slice es para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));

// Alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

// Ejemplo
const usuario = "Bastian";
console.log(usuario.substring(0, 1));
// Nuestra la letra
console.log(usuario.charAt(0));