import { gerarElemento } from "./criacao/gerarElemento.js"
import { gerarForcaImagem } from "./criacao/gerarForcaImagem.js"
import { gerarLetras } from "./criacao/gerarForcaLetras.js"
import { gerarTeclado } from "./criacao/gerarTeclado.js"
import { informacoes } from "./dados/informacoes.js"
import { inserirLetraNoContainer } from "./inserirLetraNoContainer.js"
const elementoGame = document.querySelector('.game')
const arrayDeInformacoes = informacoes

export function gerarJogo(dadosSelecionados){
    const palavraSorteada = selecionarPalavra(dadosSelecionados).nome
    const elementoForcaImagem = gerarForcaImagem()
    elementoGame.appendChild(elementoForcaImagem)
    const elementoGameLetras = gerarLetras(palavraSorteada)
    elementoGame.appendChild(elementoGameLetras)
    const elementoTeclado = gerarTeclado(palavraSorteada)
    elementoGame.appendChild(elementoTeclado)
    const balaoCategoria = gerarBalaoCategoria(dadosSelecionados)
    elementoGame.appendChild(balaoCategoria)
    const balaoDica = gerarBalaoDica(dadosSelecionados)
    elementoGame.appendChild(balaoDica)
    const arrayElementoLetrasPalavraSorteada = elementoGameLetras.querySelectorAll('.letra')
    const imagemForca = elementoForcaImagem.querySelector('img')
    const listaBtnsTeclado = elementoTeclado.querySelectorAll('.game-teclado-btn')
    inserirLetraNoContainer(palavraSorteada, arrayElementoLetrasPalavraSorteada, imagemForca, listaBtnsTeclado, dadosSelecionados)
}

function selecionarPalavra(dadosSelecionados){
    const categoriaSelecionada = arrayDeInformacoes.filter(elemento => elemento.categoria == dadosSelecionados.categoriaSelecionada)[0]
    const selecionarPalavrasPeloNivel = categoriaSelecionada.arrayDeInformacoes.filter(possivelPalavra => possivelPalavra.dificuldade == dadosSelecionados.dificuldadeSelecionada)
    const indiceDaPalavraSelecionada = Math.floor(Math.random() * selecionarPalavrasPeloNivel.length) 
    return selecionarPalavrasPeloNivel[indiceDaPalavraSelecionada]
}

function gerarBalaoCategoria(dadosSelecionados){
    const containerBalaoCategoria = gerarElemento('div', 'game-balao-categoria', '', `Categoria: <strong>${dadosSelecionados.categoriaSelecionada.split('-').join(' ')}</strong>`)
    return containerBalaoCategoria
}
function gerarBalaoDica(dadosSelecionados){
    const div = gerarElemento('div', 'game-balao-dica')
    const p = gerarElemento('p', 'game-balao-dica-p', '', 'Dica!')
    const button = gerarElemento('button', 'game-balao-dica-btn', '', `<i class="fa-solid fa-lightbulb"></i>`)
    div.appendChild(button)
    div.appendChild(p)

    return div
}