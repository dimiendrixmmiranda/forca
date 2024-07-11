import { gerarElemento } from "./gerarElemento.js"

export function gerarContainerPerdedor(palavraSorteada){
    const div = gerarElemento('div', 'game-perdedor')
    const p = gerarElemento('p', 'game-perdedor-p', '', `Você perdeu! A palavra era <strong>${palavraSorteada.toUpperCase()}</strong>`)
    const btnJogarNovamente = gerarElemento('button', 'game-perdedor-btn', 'gamePerdedorBtn', 'Jogar Novamente')
    btnJogarNovamente.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.reload(true)
    })
    div.appendChild(p)
    div.appendChild(btnJogarNovamente)
    return div
}