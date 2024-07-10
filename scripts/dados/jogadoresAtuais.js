export const jogadoresAtuais = []

adicionarJogadorDeFutebolAtual('Lionel Messi', 'facil', false)
adicionarJogadorDeFutebolAtual('Cristiano Ronaldo', 'facil', false)
adicionarJogadorDeFutebolAtual('Neymar', 'facil', false)
adicionarJogadorDeFutebolAtual('Kylian Mbappé', 'facil', false)
adicionarJogadorDeFutebolAtual('Kevin De Bruyne', 'facil', false)
adicionarJogadorDeFutebolAtual('Robert Lewandowski', 'facil', false)
adicionarJogadorDeFutebolAtual('Mohamed Salah', 'facil', false)
adicionarJogadorDeFutebolAtual('Harry Kane', 'facil', false)
adicionarJogadorDeFutebolAtual('Virgil van Dijk', 'facil', false)
adicionarJogadorDeFutebolAtual('Karim Benzema', 'facil', false)
adicionarJogadorDeFutebolAtual('Erling Haaland', 'medio', false)
adicionarJogadorDeFutebolAtual('Bruno Fernandes', 'medio', false)
adicionarJogadorDeFutebolAtual('Romelu Lukaku', 'medio', false)
adicionarJogadorDeFutebolAtual('Jadon Sancho', 'medio', false)
adicionarJogadorDeFutebolAtual('Sadio Mane', 'medio', false)
adicionarJogadorDeFutebolAtual('Raheem Sterling', 'medio', false)
adicionarJogadorDeFutebolAtual('Joshua Kimmich', 'medio', false)
adicionarJogadorDeFutebolAtual('Luka Modric', 'medio', false)
adicionarJogadorDeFutebolAtual('Thomas Muller', 'medio', false)
adicionarJogadorDeFutebolAtual('Gianluigi Donnarumma', 'medio', false)
adicionarJogadorDeFutebolAtual('Josko Gvardiol', 'dificil', false)
adicionarJogadorDeFutebolAtual('Youssoufa Moukoko', 'dificil', false)
adicionarJogadorDeFutebolAtual('Pedri', 'dificil', false)
adicionarJogadorDeFutebolAtual('Rodrygo Goes', 'dificil', false)
adicionarJogadorDeFutebolAtual('Ferran Torres', 'dificil', false)
adicionarJogadorDeFutebolAtual('Matheus Cunha', 'dificil', false)
adicionarJogadorDeFutebolAtual('Federico Chiesa', 'dificil', false)
adicionarJogadorDeFutebolAtual('Florian Wirtz', 'dificil', false)
adicionarJogadorDeFutebolAtual('Ansu Fati', 'dificil', false)
adicionarJogadorDeFutebolAtual('Ryan Gravenberch', 'dificil', false)

function adicionarJogadorDeFutebolAtual(nome, dificuldade, jaFoiAcertado = false){
    const objeto = {
        nome: nome,
        dificuldade: dificuldade,
        jaFoiAcertado: jaFoiAcertado
    }
    jogadoresAtuais.push(objeto)
}