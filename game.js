let altura = 0;
let largura = 0;
let posicaoX = 0;
let posicaoY = 0;
let mosquito = '';
let classe = 0;
let lado = 0;
let vidas = 3;
let tempo = 10;
let cronometro = '';
let nivel = (window.location.search).replace('?','');
let tempoCriacao = 0;

if (nivel === 'normal') {
    tempoCriacao = 1500
} else if (nivel === 'dificil') {
    tempoCriacao = 1000
} else if (nivel === 'cn') {
    tempoCriacao = 750
}

cronometro = setInterval(function() {
    tempo--;
    if (tempo<0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location = 'vitoria.html'
    } else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
},1000)

function ajustarTamanhoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}
function criarMosquito() {
    mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio();
    mosquito.id = 'mosquito';
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    document.body.appendChild(mosquito);
    mosquito.onclick = function(){
        this.remove();
    };
}
function tamanhoAleatorio() {
    classe = Math.floor(Math.random()*3);
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
function ladoAleatorio() {
    lado = Math.floor(Math.random()*2);
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
function posicaoAleatoria() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        if (vidas<=1) {
            window.location = 'fimDoJogo.html'
        } else{
            document.getElementById('v'+vidas).src = 'imagens/coracao_vazio.png'
            vidas--
        }
    } 
    posicaoX = Math.floor(Math.random()*largura-90);
    posicaoY = Math.floor(Math.random()*altura-90);
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    criarMosquito();
}
