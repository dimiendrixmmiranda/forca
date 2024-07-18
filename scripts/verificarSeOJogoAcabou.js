import { gerarContainerPerdedor } from "./criacao/gerarContainerPerdedor.js"
import { gerarContainerVencedor } from "./criacao/gerarContainerVencedor.js"
import { informacoes } from "./dados/informacoes.js"
import { escreverInformacoesNoLocalStorage } from "./escreverInformacoesNoLocalStorage.js"

const containerGame = document.querySelector('.game')
const audioAcerto = new Audio('../assets/audios/acerto.mp3')
const audioErro = new Audio('../assets/audios/erro.mp3')

export function vereficarSeOJogoAcabou(contadorDeErros, palavraSorteada, dadosSelecionados) {
    const arrayContainerDasLetras = document.querySelectorAll('.game-letras-container')
    const caracteres = arrayContainerDasLetras.length
    const arrayAuxiliar = []

    arrayContainerDasLetras.forEach(container => {
        if (container.innerHTML != '') {
            arrayAuxiliar.push(true)
        }
    })

    if (arrayAuxiliar.length >= caracteres) {
        console.log('voce venceu / marcar palavra como lida')
        console.log('fazer som de acerto')
        const containerVencedor = gerarContainerVencedor(palavraSorteada, dadosSelecionados)
        containerGame.appendChild(containerVencedor)

        const indiceCategoria = informacoes.findIndex(elemento => elemento.categoria == dadosSelecionados.categoriaSelecionada)
        const indicePalavra = informacoes[indiceCategoria].arrayDeInformacoes.findIndex(el => el.nome.toLowerCase() == palavraSorteada.toLowerCase())
        informacoes[indiceCategoria].arrayDeInformacoes[indicePalavra].jaFoiAcertado = true
        escreverInformacoesNoLocalStorage()
        audioAcerto.play()
        console.log(informacoes)
    }

    if (contadorDeErros >= 6) {
        const containerPerdedor = gerarContainerPerdedor(palavraSorteada, dadosSelecionados)
        elementoGame.appendChild(containerPerdedor)
        audioErro.play()
    }
}

const elementoGame = document.querySelector('.game')

