import { gerarElemento } from "./gerarElemento.js"

export function gerarLetras(palavraSorteada) {
    const elementoGameLetras = gerarElemento('div', 'game-letras', 'gameLetras')
    const palavraArray = palavraSorteada.split('')
    palavraArray.forEach(letra => {
        if (letra == ' ') {
            const gameLetraContainer = gerarElemento('div', 'game-letras-container-branco')
            elementoGameLetras.appendChild(gameLetraContainer)
            gameLetraContainer.classList.add('letra')
        } else {
            const gameLetraContainer = gerarElemento('div', 'game-letras-container')
            gameLetraContainer.classList.add('letra')
            elementoGameLetras.appendChild(gameLetraContainer)
        }
    })
    return elementoGameLetras
}