import { informacoes } from "./dados/informacoes.js"
import { gerarJogo } from "./gerarJogo.js"

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

    if (dadosSelecionados.categoriaSelecionada == undefined || dadosSelecionados.dificuldadeSelecionada == undefined || dadosSelecionados == undefined) {
        console.log('Fazer com que o usuário marque uma opção')
    } else {
        ocultarFormulario(e)
        gerarJogo(dadosSelecionados)
    }
})

const ocultarFormulario = (e) => e.target.setAttribute('style', 'display: none;')