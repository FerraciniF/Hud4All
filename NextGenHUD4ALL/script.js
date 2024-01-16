//Painel edição UL/Li a baixo:
//Toggle do painel editor
//Option a ser clicada no painel Editor
function AddOption() {
    const novaOptionText = document.getElementById('textNewUL').value;
    const novaOptionID = novaOptionText.replace(/\s+/g, '_');
    // Verificar se o texto não é nulo ou uma string vazia
    if (novaOptionText && novaOptionText.trim() !== '') {

        // Criar uma nova Option
        const novaOption = document.createElement('option');
        
        //Atribuir um ID a nova Option
        novaOption.value = novaOptionText.replace(/\s+/g, '_');

        // Atribuir um nome para a nova Option
        novaOption.text = novaOptionText;

    // Adicionar o novo item à lista de Options
    document.getElementById('OptionNewUL').appendChild(novaOption);
    }
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
    } else {
        return null; // Ou qualquer outro valor padrão, dependendo do seu caso
    }
}


// Função para adicionar nova UL
function addUL() {
    // Constante com o texto que será o texto da nova UL:
    const novaUlText = document.getElementById('textNewUL').value;
    const novaUlID = novaUlText.replace(/\s+/g, '_');
    // Verificar se o texto não é nulo ou uma string vazia
    if (novaUlText && novaUlText.trim() !== '') {
        // Criar um novo elemento ul
        const novoItemUl = document.createElement('ul');

        // Atribuir o ID com base no texto do input
        novoItemUl.id = novaUlText.replace(/\s+/g, '_');

        // Definir o texto do novo item
        novoItemUl.textContent = novaUlText; // Corrigir aqui

        // Criar um botão de exclusão
        const botaoExcluir = document.createElement('span');
        botaoExcluir.className = 'deleteButton';
        botaoExcluir.textContent = '🗑️';
        botaoExcluir.onclick = function() {
            excluirItem(novoItemUl);
            
            // Verificar e excluir a option com o mesmo texto
            const selectElement = document.getElementById('OptionNewUL');
            for (let i = 0; i < selectElement.options.length; i++) {
                const option = selectElement.options[i];
                if (option.text === novaUlText) {
                    selectElement.remove(i);
                    break; // Como encontramos a option, podemos sair do loop
                }
            }
        };

        // Adicionar o botão de exclusão ao lado do novo item
        novoItemUl.appendChild(botaoExcluir);

        // Adicionar o novo item à lista
        document.getElementById('DATas').appendChild(novoItemUl);

        // Limpar o input após adicionar o item
        document.getElementById('textNewUL').value = '';
    }
}

// Função para verificar se a tecla pressionada é Enter (chamar a funçõa a cima)
function verificarTeclaEnterToUL(event) {
    if (event.key === 'Enter') {
        // Impedir o comportamento padrão do Enter (evitar quebra de linha no input)
        event.preventDefault();
        
        // Chamar a função adicionarItem() quando Enter for pressionado
        AddOption();
        addUL();
    }
}


// Função para adicionar um novo item à lista
function adicionarItem() {
    // Constante com o texto que será o texto do novo item:
    const novoItemTexto = document.getElementById('textNewLI').value;
    // Verificar se o texto não é nulo ou uma string vazia
    if (novoItemTexto && novoItemTexto.trim() !== '') {
        // Obter o ID da opção selecionada
        const idSelecionado = obterIdOpcaoSelecionada();

        // Verificar se há uma opção selecionada
        if (idSelecionado) {
            // Criar um novo elemento li
            const novoItemLi = document.createElement('li');

            // Definir o texto do novo item
            novoItemLi.textContent = novoItemTexto;

            // Criar um botão de exclusão
            const botaoExcluir = document.createElement('span');
            botaoExcluir.className = 'deleteButton';
            botaoExcluir.textContent = '🗑️';
            botaoExcluir.onclick = function() {
                excluirItem(novoItemLi);
            };

            // Adicionar o botão de exclusão ao lado do novo item
            novoItemLi.appendChild(botaoExcluir);

            // Adicionar o novo item à lista
            document.getElementById(idSelecionado).appendChild(novoItemLi);

            // Limpar o input após adicionar o item
            document.getElementById('textNewLI').value = '';
        } else {
            console.log('Nenhuma opção selecionada para adicionar o item.');
        }
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
        btdel[i].style.display = (panelDisplay === "block") ? "inline" : "none";
    }
}


function togglePanel() {
    var panel = document.getElementById("panel");
    panel.style.display = (panel.style.display === "none") ? "block" : "none";
}

function togglePanelAndDelteBottons() {
    togglePanel();
    toggleBottonDelete();
}
