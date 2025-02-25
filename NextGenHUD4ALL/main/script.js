// Chamar a função de inicialização ao carregar a página

function search() {
    // Obter o elemento select
    var selectElement = document.getElementById("buscadorSELECT");

    // Obter a ID da option selecionada
    var selectedOptionID = selectElement.options[selectElement.selectedIndex].id;

    // Armazenar a ID da opção no localStorage
    localStorage.setItem("lastSearchEngine", selectedOptionID);

    // Imprimir o valor da ID no console (você pode fazer o que quiser com este valor)
    console.log("ID da option selecionada: " + selectedOptionID);

    // Prevenir o comportamento padrão do formulário (recarregamento da página)
    event.preventDefault();

//realizar a busca
    // Obter o valor do input
    var searchTerm = document.getElementById("searchInput").value;
    // Verificar se há um termo de pesquisa válido
    if (searchTerm.trim() !== "") {
        if (selectedOptionID === "google") {
            // Criar a URL de pesquisa no Google
            var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
            // Abrir uma nova guia/janela com a URL de pesquisa
            window.open(googleSearchUrl, "_blank");
        }
        if (selectedOptionID === "bing") {
            // Criar a URL de pesquisa no Bing
            var bingSearchUrl = "https://www.bing.com/search?q=" + encodeURIComponent(searchTerm);

            // Abrir uma nova guia/janela com a URL de pesquisa
            window.open(bingSearchUrl, "_blank");
        }
        if (selectedOptionID === "duckDuckGo") {
            // Criar a URL de pesquisa no DuckDuckGo
            var duckDuckGoSearchUrl = "https://duckduckgo.com/?q=" + encodeURIComponent(searchTerm);

            // Abrir uma nova guia/janela com a URL de pesquisa
            window.open(duckDuckGoSearchUrl, "_blank");
        }
        if (selectedOptionID === "yahoo") {
            // Criar a URL de pesquisa no Yahoo
            var yahooSearchUrl = "https://search.yahoo.com/search?p=" + encodeURIComponent(searchTerm);

            // Abrir uma nova guia/janela com a URL de pesquisa
            window.open(yahooSearchUrl, "_blank");
        }
}   
else {
    alert("Por favor, insira um termo de pesquisa válido.");
  }
}

//Painel MODIFICADOR
function togglePanelModificador() {
    var panelModificador = document.getElementById('PainelMod');
    var computedStyle = window.getComputedStyle(panelModificador);

    if (computedStyle.display === "none") {
        panelModificador.style.display = "flex";
    } else {
        panelModificador.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const savedImagePath = localStorage.getItem('backgroundImage');
    if (savedImagePath) {
        const imgElement = document.createElement('img');
        imgElement.src = savedImagePath;
        document.getElementById('IMGbackground').appendChild(imgElement);
    }

    const bodyBackgroundCOlor = localStorage.getItem('bodyBackColor');
    if (bodyBackgroundCOlor) {
        document.body.style.backgroundColor = bodyBackgroundCOlor;
    }
});

function handleFileSelect() {
    const fileInput = document.getElementById('fileInput');
    const selectedFile = fileInput.files[0];

    if (selectedFile && (selectedFile.type.startsWith('image/jpeg') || selectedFile.type.startsWith('image/png') || selectedFile.type.startsWith('image/gif'))) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imagePath = e.target.result;
            const imgBackground = document.getElementById('IMGbackground');

            // Limpar conteúdo atual
            imgBackground.innerHTML = '';

            // Salvar o caminho da imagem no localStorage
            localStorage.setItem('backgroundImage', imagePath);

            // Criar elemento IMG e adicionar à div
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgBackground.appendChild(imgElement);
        };

        reader.readAsDataURL(selectedFile);
    } else {
        alert('Por favor, selecione um arquivo GIF, JPG ou PNG.');
    }
}

function changeBackgroundColor() {
    var colorSelector = document.getElementById('colorSelector');
    var selectedColor = colorSelector.value;
    localStorage.setItem('bodyBackColor', selectedColor)
    document.body.style.backgroundColor = selectedColor;
}

//Script TEMPORARIO
function abrirPaginas() {
    window.open("https://ingresso.ufms.br/processo/sisu/", "_blank");
    window.open("https://ingresso.ufms.br/processo/vestibular/", "_blank");
    window.open("https://ingresso.ufms.br/processo/passe/", "_blank");
    window.open("https://ingresso.ufms.br/processo/qsu/"), "_blank";
}