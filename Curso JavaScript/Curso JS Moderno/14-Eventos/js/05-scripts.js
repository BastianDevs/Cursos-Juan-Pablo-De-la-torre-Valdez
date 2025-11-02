window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    const premium = document.querySelector('.premium');
    // Ubicacion del elemento
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);
    if(ubicacion.top < 100) {
        console.log("Visible");
    } else {
        console.log('Aun no')
    }
    
})