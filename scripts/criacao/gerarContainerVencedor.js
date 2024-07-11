import { gerarElemento } from "./gerarElemento.js"

export function gerarContainerVencedor(palavraSorteada) {
    const containerVencedor = gerarElemento('div', 'game-vencedor')
    const p = gerarElemento('p', 'game-vencedor-texto', '', `Parabéns, você acertou! A reposta era ${palavraSorteada}`)
    const btnJogarNovamente = gerarElemento('button', 'game-vencedor-btnJogarNovamente', '', 'Jogar Novamente?')
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