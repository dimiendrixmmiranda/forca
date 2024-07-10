import { vereficarSeOJogoAcabou } from "../verificarSeOJogoAcabou.js"
import { gerarElemento } from "./gerarElemento.js"

export function gerarTeclado(palavraSorteada) {
    const containerTeclado = gerarElemento('div', 'game-teclado')
    const arrayContainerDasLetras = document.querySelectorAll('.letra')
    const imagemDaForca = document.querySelector('.game-forca-imagem img')
    let contadorDeErros = 0
   
    arrayDeLetras.forEach(letra => {
        const btn = gerarElemento('button', 'game-teclado-btn', '', letra.toUpperCase())

        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const letra = e.target
            letra.disabled = true
            const letraSelecionada = letra.innerHTML
            let arrayDeIndices = []

            palavraSorteada.split('').forEach((letra, i) => {
                if (letraSelecionada.toLowerCase() == letra.toLowerCase()) {
                    arrayDeIndices.push(i)
                }
            })

            if (arrayDeIndices.length > 0) {
                arrayDeIndices.forEach(indice => {
                    arrayContainerDasLetras[indice].innerHTML = letraSelecionada
                })
                vereficarSeOJogoAcabou(contadorDeErros)
            } else {
                if (contadorDeErros < 6) {
                    contadorDeErros++
                    imagemDaForca.setAttribute('src', `../assets/imgs/forca-${contadorDeErros}.png`)
                    vereficarSeOJogoAcabou(contadorDeErros)
                }
            }
        })
        containerTeclado.appendChild(btn)
    })
    return containerTeclado
}

const arrayDeLetras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç"]