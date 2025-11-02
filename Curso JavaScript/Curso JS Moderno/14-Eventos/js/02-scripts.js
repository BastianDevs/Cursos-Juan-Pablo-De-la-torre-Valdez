const nav = document.querySelector('.navegacion');

// Registrar un evento

nav.addEventListener('mouseout', () => {
    console.log('saliendo del nav');
    nav.style.backgroundColor = 'transparent'
})

nav.addEventListener('dblclick', () => {
    console.log('entrando en el nav');
    nav.style.backgroundColor = 'white'

})

// mouse - similar al click 
// click 
// dblclick - doble click 
// mouseup - cuando sueltas el mouse