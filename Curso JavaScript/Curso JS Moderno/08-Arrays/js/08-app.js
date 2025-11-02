const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: TextTrackCue
}

// Destructuring en objetos

const {nombre} = producto;

console.log(nombre);

// Destructuring en Arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, ...tercero] = numeros;
console.log(tercero);