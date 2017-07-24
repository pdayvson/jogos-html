var canvas, context, altura, largura, frames = 0;

function clique(event) {
    alert('clicou');
    console.log('teste');
}

function main() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    if (largura >= 500) {
        largura = 600;
        altura = 600;
    }

    canvas = document.createElement('canvas');
    canvas.width = largura;
    canvas.height = altura;
    canvas.style.border = '1px solid #000';

    context = canvas.getContext('2d');
    document.body.appendChild(canvas);
    document.addEventListener('mousedown', clique);
}

function roda() {
    // body...
}

function atualiza() {
    // body...
}

function desenha() {
    // body...
}

// inicializa o jogo
main();