import { gerarJogo } from "../gerarJogo.js"
import { gerarElemento } from "./gerarElemento.js"

export function gerarContainerVencedor(palavraSorteada, dadosSelecionados) {
    const containerVencedor = gerarElemento('div', 'game-vencedor')
    const p = gerarElemento('p', 'game-vencedor-texto', '', `Parabéns, você acertou! A reposta era ${palavraSorteada.toUpperCase()}`)
    const btnJogarNovamente = gerarElemento('button', 'game-vencedor-btnJogarNovamente', '', 'Jogar Novamente?')

    btnJogarNovamente.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.reload(true)
        // BUG: a cada 2 acertos a palavra se resolve sozinho! 
        // document.querySelector('.game').innerHTML = ''
        // gerarJogo(dadosSelecionados)
    })

    const btnVoltarAoMenu = gerarElemento('button', 'game-vencedor-btnVoltarAoMenu', '', 'Voltar ao Menu')
    btnVoltarAoMenu.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.reload(true)
    })
    containerVencedor.appendChild(p)
    containerVencedor.appendChild(btnJogarNovamente)
    containerVencedor.appendChild(btnVoltarAoMenu)
    return containerVencedor
}