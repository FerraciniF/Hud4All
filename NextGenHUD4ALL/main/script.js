// Chamar a função de inicialização ao carregar a página
carregarOptions()

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

    togglePanel();
    toggleBottonDelete();
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



















// Função para obter o ID da opção selecionada
function obterIdOpcaoSelecionada() {
    // Supondo que você tenha um elemento select com ID 'OptionNewUL'
    const selectElement = document.getElementById('OptionNewUL');

    // Obter a opção selecionada
    const opcaoSelecionada = selectElement.options[selectElement.selectedIndex];

    // Verificar se há uma opção selecionada
    if (opcaoSelecionada) {
        // Obter o valor (que é o ID) da opção selecionada
        const idOpcaoSelecionada = opcaoSelecionada.value;
        return idOpcaoSelecionada;
    } 
    else {
        return null;
    }
}

// Função para verificar se a tecla pressionada é Enter (chamar a funçõa a cima)
function verificarTeclaEnterToUL(event) {
    if (event.key === 'Enter') {
        // Impedir o comportamento padrão do Enter (evitar quebra de linha no input)
        event.preventDefault();
        
        // Chamar a função adicionarItem() quando Enter for pressionado
        inserirNovoElemento();
    }
}

// Função para verificar se a tecla pressionada é Enter (chamar a funçõa a cima)
function verificarTeclaEnterToLI(event) {
    if (event.key === 'Enter') {
        // Impedir o comportamento padrão do Enter (evitar quebra de linha no input)
        event.preventDefault();
        
        // Chamar a função adicionarItem() quando Enter for pressionado
        adicionarItem();
    }
}

//Função que é chamada pelo botão de excluir, ela exclui o Item da LI.
function excluirItem(item) {
    item.remove();
}
function toggleBottonDelete() {
    var btdel = document.getElementsByClassName("deleteButton");

    // Verificar o estado do painel
    var panel = document.getElementById("panel");
    var panelDisplay = window.getComputedStyle(panel).display;

    // Iterar sobre a coleção de elementos
    for (var i = 0; i < btdel.length; i++) {
        // Exibir botão delete apenas se o painel estiver visível
        btdel[i].style.display = (panelDisplay === "flex") ? "inline" : "none";
    }
}

function togglePanel() {
    var panel = document.getElementById("panel");
    var computedStyleUL = window.getComputedStyle(panel);
    if (computedStyleUL.display === "none") {
        panel.style.display = "flex";
    } else {
        panel.style.display = "none";
    }
}

function togglePanelAndDelteBottons() {
    togglePanel();
    toggleBottonDelete();
}

function inserirNovoElemento() {
    // Constante com o texto que será o texto da nova UL:
    const nome = document.getElementById('textNewElement').value;
    const nomeID = nome.replace(/\s+/g, '_');
    // Verificar se o texto não é nulo ou uma string vazia
    if (nome && nome.trim() !== '') {
        const opcaoSelecionadaID = obterIdOpcaoSelecionada();
        if (opcaoSelecionadaID) {
            adicionarLi(nome,nomeID, opcaoSelecionadaID);
        }
        else {
            adicionarUl(nome,nomeID);
            const optionID = nomeID + "_option"
            adicionarOption(nome,nomeID,optionID);
        }
        // Limpar o input após adicionar o item
        document.getElementById('textNewElement').value = '';
    }
    salvarUl()
}
function adicionarLi(nome, nomeID, opcaoSelecionada) {
    // Criar um novo elemento li
    const novoItemLi = document.createElement('li');

    // Definir o texto do novo item
    novoItemLi.textContent = nome;

    //Add ID
    novoItemLi.id = nomeID;

    novoItemLi.className = 'NewLi';
    // Criar um botão de exclusão
    const botaoExcluir = document.createElement('span');
    botaoExcluir.className = 'deleteButton';
    botaoExcluir.textContent = '🗑️';
    botaoExcluir.onclick = function() {
        excluirItem(novoItemLi);
        salvarUl();
    };

    // Adicionar o botão de exclusão ao lado do novo item
    novoItemLi.appendChild(botaoExcluir);

    // Adicionar o novo item à lista
    document.getElementById(opcaoSelecionada).appendChild(novoItemLi);
    toggleBottonDelete()
    
}
function adicionarUl(nome, nomeID) {
    // Criar um novo elemento ul
    const novoItemUl = document.createElement('ul');

    // Atribuir o ID com base no texto do input
    novoItemUl.id = nomeID;

    // Definir o texto do novo item
    novoItemUl.textContent = nome; 

    novoItemUl.className = 'NewUL'
    // Criar um botão de exclusão
    const botaoExcluir = document.createElement('span');
    botaoExcluir.className = 'deleteButton';
    botaoExcluir.textContent = '🗑️';
    botaoExcluir.onclick = function() {
        excluirItem(novoItemUl);
        excluirOption(nome)
        salvarUl();
    };

    // Adicionar o botão de exclusão ao lado do novo item
    novoItemUl.appendChild(botaoExcluir);

    // Adicionar o novo item à lista
    document.getElementById('DATas').appendChild(novoItemUl);

    toggleBottonDelete()
}

function adicionarOption(nome,nameID,optionID){
    // Criar uma nova Option
    const novaOption = document.createElement('option');
    
    //Atribuir um ID a nova Option
    novaOption.id = optionID;

    novaOption.value = nameID;

    novaOption.className = 'UloptionSelector'

    // Atribuir um nome para a nova Option
    novaOption.text = nome;

    // Adicionar o novo item à lista de Options
    document.getElementById('OptionNewUL').appendChild(novaOption);
}

function excluirOption(nome) {

    // Verificar e excluir a option com o mesmo texto
    const selectElement = document.getElementById('OptionNewUL');
    for (let i = 0; i < selectElement.options.length; i++) {
        const option = selectElement.options[i];
        if (option.text === nome) {
            selectElement.remove(i);
            break; // Como encontramos a option, podemos sair do loop
        }
    }
}

function salvarUl() {
    const ULSdatas = document.getElementsByClassName('NewUL')
    //const chieldsDats = selectElement.childNodes;
    //const ULSdatas = Array.from(selectElement).map(ul => ul.id);
    var salvarUls = []
    Array.from(ULSdatas).forEach(ul => {
        //localStorage.setItem('ul', JSON.stringify(ul));
        const LIs = ul.getElementsByClassName('NewLi')
        var salvarLIs = []
        Array.from(LIs).forEach(li => {
            salvarLIs.push(li.textContent)
        })
        var obj = {
            nome: ul.textContent,
            lis: salvarLIs
        }
        salvarUls.push(obj)
    })
    localStorage.setItem('ul', JSON.stringify(salvarUls));
}
function apagarUl(salvarUls) {
    localStorage.remove('ul', JSON.stringify(salvarUls));
}
function carregarOptions() {
    const selectElement = document.getElementById('OptionNewUL');
    const savedUls = JSON.parse(localStorage.getItem('ul')) || [];
    
    savedUls.forEach(ul => {
        const nomeID = ul.nome.replace(/\s+/g, '_');
        adicionarUl(ul.nome, nomeID)
        const optionID = nomeID + "_option"
        adicionarOption(ul.nome,nomeID,optionID);
        ul.lis.forEach(li => {
            const nomeLiID = li.replace(/\s+/g, '_');
            adicionarLi(li, nomeLiID, nomeID)
        })
    });
}
