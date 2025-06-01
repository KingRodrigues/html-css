const cores = ['#4285F4', '#DB4437', '#F4B400', '#4285F4', '#0F9D58', '#DB4437']; // Array de cores
const texto = 'Google'; 
const logo = document.getElementById('google');

let novoHTML = '';

for (let i = 0; i < texto.length; i++) { // Percorre cada caractere da string
    novoHTML += `<span style="color: ${cores[i]}">${texto[i]}</span>`; // Para cada letra, cria um <span> com a cor correspondente do array e adiciona à string "novoHTML"
}

logo.innerHTML = novoHTML; // Define o conteúdo do elemento HTML com o novo HTML colorido

function sky() { // Botão "sky" para alterar a imagem
    const superman = document.getElementById('superimg')
    superman.innerHTML = ''
    superman.innerHTML = `<img src="https://i.pinimg.com/originals/db/3c/cc/db3ccc69d63fe6aec60eb96592408153.gif" alt="Superman voando"></img>`
    

}