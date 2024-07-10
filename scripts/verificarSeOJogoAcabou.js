import { gerarElemento } from "./criacao/gerarElemento.js"

export function vereficarSeOJogoAcabou(contadorDeErros) {
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
        // tem que marcar a palavra como lida/ ja concluida
    }

    if(contadorDeErros >= 6){
        const containerPerdedor = gerarContainerPerdedor()
        elementoGame.appendChild(containerPerdedor)
    }
}

const elementoGame = document.querySelector('.game')

function gerarContainerPerdedor(){
    const div = gerarElemento('div', 'game-perdedor')
    const p = gerarElemento('p', 'game-perdedor-p', '', 'Você perdeu!')
    const btnJogarNovamente = gerarElemento('button', 'game-perdedor-btn', 'gamePerdedorBtn', 'Jogar Novamente')
    btnJogarNovamente.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.reload(true)
    })
    div.appendChild(p)
    div.appendChild(btnJogarNovamente)
    return div
}