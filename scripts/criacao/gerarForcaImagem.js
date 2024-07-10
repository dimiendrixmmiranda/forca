import { gerarElemento } from "./gerarElemento.js";

export function gerarForcaImagem(){
    const gameForca = gerarElemento('div', 'game-forca', 'gameForca')
    const gameForcaContainer = gerarElemento('div', 'game-forca-imagem')
    const img = gerarElemento('img')
    img.src = '../assets/imgs/forca-0.png'
    gameForcaContainer.appendChild(img)
    gameForca.appendChild(gameForcaContainer)
    return gameForca
}