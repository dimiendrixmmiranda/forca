import { inserirLetraNoContainer } from "../inserirLetraNoContainer.js"
import { vereficarSeOJogoAcabou } from "../verificarSeOJogoAcabou.js"
import { gerarElemento } from "./gerarElemento.js"

export function gerarTeclado() {
    const containerTeclado = gerarElemento('div', 'game-teclado')
    arrayDeLetras.forEach(letra => {
        const btn = gerarElemento('button', 'game-teclado-btn', '', letra.toUpperCase())
        containerTeclado.appendChild(btn)
    })
    return containerTeclado
}

const arrayDeLetras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç"]