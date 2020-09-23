var personaje = document.querySelector('#personaje');
var block = document.querySelector('#block');
var h1 = document.querySelector('#click');

function saltar() {
    if (personaje.classList.contains("saltar")) { return }

    personaje.classList.add("saltar");
    block.classList.add('empezar');
    h1.style.display = "none";
    setTimeout(() => {
        personaje.classList.remove("saltar")
    }, 500);
}
var chocar = setInterval(function () {
    var altura =
        parseInt(window.getComputedStyle(personaje).getPropertyValue('top'));
    var bloque =
        parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (bloque < 20 && bloque > 0 && altura >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert('Perdiste :(')
    }
}, 10);

