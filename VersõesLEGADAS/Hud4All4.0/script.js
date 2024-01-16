// apagar o gif quando modo janela
const y = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
if(y < 900){
    let gif = document.getElementById('gifback');
    gif.style = 
    'display: none'
}


// Bottom CHATGPT <3
const chatgpt = 'https://chat.openai.com/';
function GGPTChat(chatggpt) {
    chatggpt.preventDefault();
    const ggpt = window.open(chatgpt, '_blank');
    ggpt.focus();
}


// Barra de pesquisa
const formulario = document.getElementById('form');
const caixaPesquisa = document.getElementById('query');
const google = 'https://www.google.com/search?q=';
const site = '';

function submitted(event) {
    event.preventDefault();
    const url = google + site + '+' + caixaPesquisa.value;
    const win = window.open(url, '_blank');
    win.focus();
}

formulario.addEventListener('submit', submitted);

