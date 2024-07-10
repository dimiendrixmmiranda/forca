export const estadios = []

adicionarEstadio('Maracanã', 'facil', false)
adicionarEstadio('Camp Nou', 'facil', false)
adicionarEstadio('Santiago Bernabéu', 'facil', false)
adicionarEstadio('Old Trafford', 'facil', false)
adicionarEstadio('Anfield', 'facil', false)
adicionarEstadio('San Siro', 'facil', false)
adicionarEstadio('Allianz Arena', 'facil', false)
adicionarEstadio('Parc des Princes', 'facil', false)
adicionarEstadio('Estádio da Luz', 'facil', false)
adicionarEstadio('Stamford Bridge', 'facil', false)
adicionarEstadio('Signal Iduna Park', 'medio', false)
adicionarEstadio('Wembley Stadium', 'medio', false)
adicionarEstadio('Estádio do Dragão', 'medio', false)
adicionarEstadio('Emirates Stadium', 'medio', false)
adicionarEstadio('Estádio Olímpico de Roma', 'medio', false)
adicionarEstadio('Estádio José Alvalade', 'medio', false)
adicionarEstadio('Estádio Monumental de Núñez', 'medio', false)
adicionarEstadio('Estádio Nacional de Brasília', 'medio', false)
adicionarEstadio('Estádio Azteca', 'medio', false)
adicionarEstadio('Estádio de São Petersburgo', 'medio', false)

function adicionarEstadio(nome, dificuldade, jaFoiAcertado = false){
    const objeto = {
        nome: nome,
        dificuldade: dificuldade,
        jaFoiAcertado: jaFoiAcertado
    }
    estadios.push(objeto)
}

