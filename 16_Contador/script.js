let incremento = 0;

function incrementar() {
    incremento = incremento + 1;
    console.log(incremento);

    let pantalla = document.getElementById('pantalla');
    pantalla.textContent = incremento;

}

