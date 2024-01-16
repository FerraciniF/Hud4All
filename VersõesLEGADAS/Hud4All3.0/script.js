var modal = false

    document.addEventListener('click', function(e) {
        //verifica se o alvo do seu clique está sendo o modal ou um botão
        if (e.target != document.getElementsById(modal)[0] && e.target != document.getElementsByClassName('btn_modal')[0]) {
            fecharModalLancamento(modal);
        }
    })

    function abrirModalLancamento(dia) {
        debugger
        modal = dia
        document.getElementById(dia).style.display = 'block';
    }


    // função fechar modal lançamento   
    function fecharModalLancamento(dia) {
        modal = false
        document.getElementById(dia).style.display = 'none';
    }

// apagar o gif quando modo janela


const y = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
if(y < 900){
    let gif = document.getElementById('gifback');
    gif.style = 
    'display: none'
}