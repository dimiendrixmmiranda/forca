export const jogadoresAposentados = []

adicionarJogadorDeFutebolAposentado('Pele', 'facil', false)
adicionarJogadorDeFutebolAposentado('Diego Maradona', 'facil', false)
adicionarJogadorDeFutebolAposentado('Zinedine Zidane', 'facil', false)
adicionarJogadorDeFutebolAposentado('Ronaldo Nazario', 'facil', false)
adicionarJogadorDeFutebolAposentado('Ronaldinho', 'facil', false)
adicionarJogadorDeFutebolAposentado('David Beckham', 'facil', false)
adicionarJogadorDeFutebolAposentado('Franz Beckenbauer', 'facil', false)
adicionarJogadorDeFutebolAposentado('Paolo Maldini', 'facil', false)
adicionarJogadorDeFutebolAposentado('Thierry Henry', 'facil', false)
adicionarJogadorDeFutebolAposentado('Johan Cruyff', 'facil', false)
adicionarJogadorDeFutebolAposentado('Roberto Carlos', 'medio', false)
adicionarJogadorDeFutebolAposentado('Andrea Pirlo', 'medio', false)
adicionarJogadorDeFutebolAposentado('Luis Figo', 'medio', false)
adicionarJogadorDeFutebolAposentado('Xavi Hernandez', 'medio', false)
adicionarJogadorDeFutebolAposentado('Francesco Totti', 'medio', false)
adicionarJogadorDeFutebolAposentado('Gabriel Batistuta', 'medio', false)
adicionarJogadorDeFutebolAposentado('Clarence Seedorf', 'medio', false)
adicionarJogadorDeFutebolAposentado('Kaka', 'medio', false)
adicionarJogadorDeFutebolAposentado('George Best', 'medio', false)
adicionarJogadorDeFutebolAposentado('Didier Drogba', 'medio', false)
adicionarJogadorDeFutebolAposentado('Gheorghe Hagi', 'dificil', false)
adicionarJogadorDeFutebolAposentado('Hristo Stoichkov', 'dificil', false)
adicionarJogadorDeFutebolAposentado('Rivaldo', 'dificil', false)
adicionarJogadorDeFutebolAposentado('Fernando Redondo', 'dificil', false)
adicionarJogadorDeFutebolAposentado('Enzo Francescoli', 'dificil', false)
adicionarJogadorDeFutebolAposentado('Rui Costa', 'dificil', false)
adicionarJogadorDeFutebolAposentado('Davor Suker', 'dificil', false)
adicionarJogadorDeFutebolAposentado('Michael Laudrup', 'dificil', false)
adicionarJogadorDeFutebolAposentado('Socrates', 'dificil', false)
adicionarJogadorDeFutebolAposentado('Gianfranco Zola', 'dificil', false)

function adicionarJogadorDeFutebolAposentado(nome, dificuldade, jaFoiAcertado = false){
    const objeto = {
        nome: nome,
        dificuldade: dificuldade,
        jaFoiAcertado: jaFoiAcertado
    }
    jogadoresAposentados.push(objeto)
}