// Funcion con parametro por default
function saludar(nombre, apellido = "") {
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Bastian')