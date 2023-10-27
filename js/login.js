const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');

//nesta etapa eu seleciono o input e o botão para que eu possa alteralos 

const validarInput = ({ target }) => {
    if (target.value.length > 3){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
    
}

// aqui eu chamo eles e digo que quando o valor digitado em input for maior ou igual a 3 caracteres ele habilita o botão de play

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('jogador', input.value);
    window.location = 'paginas/jogo.html';
}

// Aqui eu realizei uma regra para que quando o submit/envio do formulario for realizado ele não recarregue a pagina e grave nop local storage os dados do jogador e encaminha ele a pagina do jogo

input.addEventListener('input', validarInput);
form.addEventListener('submit', handleSubmit);

