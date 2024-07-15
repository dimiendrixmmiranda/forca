import { substituirAcentoDaPalavra } from "../validacaoDeAcentos.js"

export function adicionarElementoALista(array, nome, dificuldade, dica){
    const objeto = {
        nome: substituirAcentoDaPalavra(nome),
        dificuldade: dificuldade,
        jaFoiAcertado: false,
        dica: dica
    }
    array.push(objeto)
}