// for in itera sobre objetos

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for (const key in automovil) {
    if (Object.hasOwnProperty.call(automovil, key)) {
        console.log(automovil[key]);
    }
}

for(let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);
    console.log(llave);
}