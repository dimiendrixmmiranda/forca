import { gerarForcaImagem } from "./criacao/gerarForcaImagem.js"
import { gerarLetras } from "./criacao/gerarForcaLetras.js"
import { gerarTeclado } from "./criacao/gerarTeclado.js"
import { informacoes } from "./dados/informacoes.js"
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
}

function selecionarPalavra(dadosSelecionados){
    const categoriaSelecionada = arrayDeInformacoes.filter(elemento => elemento.categoria == dadosSelecionados.categoriaSelecionada)[0]
    const selecionarPalavrasPeloNivel = categoriaSelecionada.arrayDeInformacoes.filter(possivelPalavra => possivelPalavra.dificuldade == dadosSelecionados.dificuldadeSelecionada)
    const indiceDaPalavraSelecionada = Math.floor(Math.random() * selecionarPalavrasPeloNivel.length) 
    return selecionarPalavrasPeloNivel[indiceDaPalavraSelecionada]
}