import { substituirAcentoDaPalavra } from "../validacaoDeAcentos.js"

export function adicionarElementoALista(array, nome, dificuldade){
    const objeto = {
        nome: substituirAcentoDaPalavra(nome),
        dificuldade: dificuldade,
        jaFoiAcertado: false
    }
    array.push(objeto)
}