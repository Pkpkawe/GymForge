var foto = window.document.getElementById('Representacao')
var atributo = foto.getAttribute('src')
var botao = window.document.getElementById('Virar')

botao.addEventListener('click', virar)

function virar() {
    if (atributo == '../Mídias/Imagens/Musculos_Com_Nomes_Frente.png') {
        atributo = '../Mídias/Imagens/Musculos_Com_Nomes_Verso.png'
        foto.setAttribute('src', '../Mídias/Imagens/Musculos_Com_Nomes_Verso.png')
    } else if (atributo == '../Mídias/Imagens/Musculos_Com_Nomes_Verso.png') {
        atributo = '../Mídias/Imagens/Musculos_Com_Nomes_Frente.png'
        foto.setAttribute('src', '../Mídias/Imagens/Musculos_Com_Nomes_Frente.png')
    } else {
        window.alert('Error')
    }
}