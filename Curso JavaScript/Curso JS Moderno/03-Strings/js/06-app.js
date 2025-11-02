const producto = 'Monitor 20 Pulgadas';

// repeat te va a repetir una cadena de texto...
// redondea si el valor no es entero
const texto = " en Promocion".repeat(3);

console.log(texto);
console.log(`${producto} ${texto}`);

// Split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "))

const hobbies = "Leer, caminar, escuchar musica, escribir, aprender a programar";
console.log(hobbies.split(","))

const tweet = "Aprendiendo JavaScript #JSModerno";
console.log(tweet.split("#"));