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