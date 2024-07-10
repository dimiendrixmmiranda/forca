export const selecoes = []


adicionarSelecao('Brasil', 'facil', false)
adicionarSelecao('Alemanha', 'facil', false)
adicionarSelecao('Argentina', 'facil', false)
adicionarSelecao('França', 'facil', false)
adicionarSelecao('Italia', 'facil', false)
adicionarSelecao('Espanha', 'facil', false)
adicionarSelecao('Inglaterra', 'facil', false)
adicionarSelecao('Portugal', 'facil', false)
adicionarSelecao('Holanda', 'facil', false)
adicionarSelecao('Uruguai', 'facil', false)
adicionarSelecao('Croacia', 'medio', false)
adicionarSelecao('Belgica', 'medio', false)
adicionarSelecao('Colombia', 'medio', false)
adicionarSelecao('Chile', 'medio', false)
adicionarSelecao('Mexico', 'medio', false)
adicionarSelecao('Suiça', 'medio', false)
adicionarSelecao('Suecia', 'medio', false)
adicionarSelecao('Dinamarca', 'medio', false)
adicionarSelecao('Nigeria', 'medio', false)
adicionarSelecao('Japao', 'medio', false)
adicionarSelecao('Islandia', 'dificil', false)
adicionarSelecao('Marrocos', 'dificil', false)
adicionarSelecao('Senegal', 'dificil', false)
adicionarSelecao('Peru', 'dificil', false)
adicionarSelecao('Ira', 'dificil', false)
adicionarSelecao('Coreia do Sul', false, 'dificil')
adicionarSelecao('Costa Rica', 'difici, falsel')
adicionarSelecao('Gana', 'dificil', false)
adicionarSelecao('Camaroes', 'dificil', false)
adicionarSelecao('Australia', 'dificil', false)

function adicionarSelecao(nome, dificuldade, jaFoiAcertado = false){
    const objeto = {
        nome: nome,
        dificuldade: dificuldade,
        jaFoiAcertado: jaFoiAcertado
    }
    selecoes.push(objeto)
}

