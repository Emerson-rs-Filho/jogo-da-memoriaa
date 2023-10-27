//Aqui peguei as 3 classes que estão separadas no HTML e as juntei com a tag appendChild
const grid = document.querySelector('.grid');

const spanJogador = document.querySelector('.jogador');

const Tempo = document.querySelector('.tempo');

const linguagens = [
    'html1',
    'css',
    'js',
    'php',
    'python',
    'sql',
    'github',
    'java1',
    'c++',
    'Dart-logo',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let primeiraCarta = '';
let segundaCarta = '';

const checarFimJogo = () => {
    const disabledCard = document.querySelectorAll('.disabled-card');

    if (disabledCard.length == 20) {
       setTimeout(() =>{ 
        alert('Parabéns, você consguiu!');
        }, 500);
    }
}


const checarCartas = () => {
    const primeiraLinguagem = primeiraCarta.getAttribute('data-linguagens');
    const segundaLinguagem = segundaCarta.getAttribute('data-linguagens');

    if (primeiraLinguagem == segundaLinguagem){

        primeiraCarta.firstChild.classList.add('disabled-card');
        segundaCarta.firstChild.classList.add('disabled-card');

        primeiraCarta = '';
        segundaCarta = '';

        checarFimJogo();

    } else {
        setTimeout(() => {

            primeiraCarta.classList.remove('revelar-carta');
            segundaCarta.classList.remove('revelar-carta');

            primeiraCarta = '';
            segundaCarta = '';

        }, 500);
       
    }

}

//Aqui usei target para trocar o click da carta frente para carta back, com isso puxei a calsse de css para que quando clicar na carta ela vire com a face de tras

const revelarCarta = ({ target }) => { 
if (target.parentNode.className.includes('revelar-carta')){
    return;
}

if (primeiraCarta == '') {

    target.parentNode.classList.add('revelar-carta');
    primeiraCarta = target.parentNode;

} else if (segundaCarta == ''){

    target.parentNode.classList.add('revelar-carta');
    segundaCarta = target.parentNode;

    checarCartas();
}

  
}

const criarCarta = (linguagens) => {
    const cartas = createElement('div', 'cartas');
    const frente = createElement('div', 'face frente');
    const tras = createElement('div', 'face tras');

    frente.style.backgroundImage = `url('../imagens/${linguagens}.png')`;

    cartas.appendChild(frente);
    cartas.appendChild(tras);

    cartas.addEventListener('click', revelarCarta)
    cartas.setAttribute('data-linguagens', linguagens);


    return cartas;

}

// essa constante é responsavel por carregar o jogo, aqui tambem dupliquei o array para limpar o codigo
const loadGame = () => {

    const duplicateLinguagens = [ ...linguagens, ...linguagens]

    const embaralharArray = duplicateLinguagens.sort(() => Math.random() - 0.5);

    duplicateLinguagens.forEach((linguagens) => {
        
        const card = criarCarta(linguagens);
        grid.appendChild(card);

    });
}


window.onload = () => {

    const nomeJogador = localStorage.getItem('jogador');
    spanJogador.innerHTML = nomeJogador;
    
    

    loadGame();
}

//Usei o Sort para ordenar aleatoriamente todas as imagens para que não se mantessem em sequencia


