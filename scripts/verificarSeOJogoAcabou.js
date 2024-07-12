import { gerarContainerPerdedor } from "./criacao/gerarContainerPerdedor.js"
import { gerarContainerVencedor } from "./criacao/gerarContainerVencedor.js"

const containerGame = document.querySelector('.game')

export function vereficarSeOJogoAcabou(contadorDeErros, palavraSorteada, dadosSelecionados) {
    const arrayContainerDasLetras = document.querySelectorAll('.game-letras-container')
    const caracteres = arrayContainerDasLetras.length
    const arrayAuxiliar = []

    arrayContainerDasLetras.forEach(container => {
        if (container.innerHTML != '') {
            arrayAuxiliar.push(true)
        }
    })

    if (arrayAuxiliar.length >= caracteres){
        console.log('voce venceu / marcar palavra como lida')
        const containerVencedor = gerarContainerVencedor(palavraSorteada, dadosSelecionados)
        containerGame.appendChild(containerVencedor)
        // tem que marcar a palavra como lida/ ja concluida
    }

    if(contadorDeErros >= 6){
        const containerPerdedor = gerarContainerPerdedor(palavraSorteada, dadosSelecionados)
        elementoGame.appendChild(containerPerdedor)
    }
}

const elementoGame = document.querySelector('.game')

