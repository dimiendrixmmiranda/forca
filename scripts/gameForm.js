import { gerarElemento } from "./criacao/gerarElemento.js"
import { gerarJogo } from "./gerarJogo.js"

const game = document.querySelector('.game')
const gameForm = document.querySelector('#gameForm')

gameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const listaDeCategorias = e.target.querySelectorAll('.game-form-category input')
    const listaDeDificuldade = e.target.querySelectorAll('.game-form-difficulty input')
    const dadosSelecionados = {}

    listaDeCategorias.forEach(categoria => {
        if (categoria.checked) {
            dadosSelecionados.categoriaSelecionada = categoria.id
        }
    });

    listaDeDificuldade.forEach(dificuldade => {
        if (dificuldade.checked) {
            dadosSelecionados.dificuldadeSelecionada = dificuldade.id
        }
    })

    if (dadosSelecionados.categoriaSelecionada == undefined) {
        console.log('Fazer com que o usuário marque uma opção')
        const containerAviso = gerarContainerAviso('Selecione uma categoria!')
        game.appendChild(containerAviso)
    }else if(dadosSelecionados.dificuldadeSelecionada == undefined){
        const containerAviso = gerarContainerAviso('Selecione a dificuldade!')
        game.appendChild(containerAviso)
    } 
    else {
        ocultarFormulario(e)
        gerarJogo(dadosSelecionados)
    }
    // || dadosSelecionados == undefined
})

const ocultarFormulario = (e) => e.target.setAttribute('style', 'display: none;')

function gerarContainerAviso(msg){
    const divContainer = gerarElemento('div', 'game-aviso', '#aviso')
    const p = gerarElemento('p', 'game-aviso-texto', '', msg)
    const btn = gerarElemento('button', 'game-aviso-btn', '', 'Ok')
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.parentElement.remove()
    })
    divContainer.appendChild(p)
    divContainer.appendChild(btn)
    return divContainer
}