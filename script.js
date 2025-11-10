const letreiro = document.getElementById('letreiro');

let pos = 0;
let direcao = 1;
const velocidade = 2;

function moverLetreiro() {
    const containerWidth = letreiro.parentElement.offsetWidth;
    const textoWidth = letreiro.offsetWidth;

    pos += direcao * velocidade;
    letreiro.style.left = pos + 'px';

    if (pos + textoWidth >= containerWidth || pos <= 0) {
        direcao *= -1;
    }

    requestAnimationFrame(moverLetreiro);
}

moverLetreiro();
