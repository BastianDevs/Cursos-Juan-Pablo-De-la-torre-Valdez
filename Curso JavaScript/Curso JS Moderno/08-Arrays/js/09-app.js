const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 200},
    {nombre: 'Television', precio: 200},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 100},
    {nombre: 'Celular', precio: 500}
]

carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - ${producto.precio}`)
})