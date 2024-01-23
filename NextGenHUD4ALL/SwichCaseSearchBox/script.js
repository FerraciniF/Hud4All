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