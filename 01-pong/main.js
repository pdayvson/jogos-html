let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');

let teclas = {};

let bola = {
    x: canvas.width / 2 - 15,
    y: canvas.height / 2 - 15,
    altura: 30,
    largura: 30,
    dirX: -1,
    dirY: 1,
    sppedMod: 0,
    speed: 50
};

let esquerda = {
    x: 10,
    y: (canvas.height / 2 - 60),
    altura: 120,
    largura: 30,
    score: 0,
    speed: 15
};

let direita = {
    x: 560,
    y: canvas.height / 2 - 60,
    altura: 120,
    largura: 30,
    score: 0,
    speed: 15
};

document.addEventListener('keydown', function(e) {
    teclas[e.keyCode] = true;
    // alert(e.keyCode);
});

document.addEventListener('keyup', function(e){
    delete teclas[e.keyCode];
});

function moveBloco() {
    if (87 in teclas && esquerda.y > 0)
        esquerda.y -= esquerda.speed;

    if (83 in teclas && esquerda.y + esquerda.altura < canvas.height)
        esquerda.y += esquerda.speed;

    if (38 in teclas && direita.y > 0)
        direita.y -= direita.speed;

    if (40 in teclas && direita.y + direita.altura < canvas.height)
        direita.y += direita.speed;
}

function desenha() {
    'use strict';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    moveBloco();

    ctx.fillStyle = 'white';

    ctx.fillRect(esquerda.x, esquerda.y, esquerda.largura, esquerda.altura);
    ctx.fillRect(direita.x, direita.y, direita.largura, direita.altura);
    ctx.fillRect(bola.x, bola.y, bola.largura, bola.altura);

    ctx.font = '20px Arial';
    ctx.fillText('Player 1: ' + esquerda.score, 50, 20);
    ctx.fillText('Player 2: ' + direita.score, canvas.width - 150, 20);
}

// desenha();
// window.requestAnimationFrame(function() {
//     desenha();
// });

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
})();

(function animloop(){
    requestAnimFrame(animloop);
    desenha();
})();