export const clubesDeFutebol = []

adicionarClubeDeFutebol('Corinthians', 'facil', false)
adicionarClubeDeFutebol('Barcelona', 'facil', false)
adicionarClubeDeFutebol('Real Madrid', 'facil', false)
adicionarClubeDeFutebol('Manchester United', 'facil', false)
adicionarClubeDeFutebol('Liverpool', 'facil', false)
adicionarClubeDeFutebol('Bayern Munich', 'facil', false)
adicionarClubeDeFutebol('Juventus', 'facil', false)
adicionarClubeDeFutebol('Paris Saint-Germain', 'facil', false)
adicionarClubeDeFutebol('AC Milan', 'facil', false)
adicionarClubeDeFutebol('Chelsea', 'facil', false)
adicionarClubeDeFutebol('Borussia Dortmund', 'medio', false)
adicionarClubeDeFutebol('Atletico Madrid', 'medio', false)
adicionarClubeDeFutebol('Inter Milan', 'medio', false)
adicionarClubeDeFutebol('Tottenham Hotspur', 'medio', false)
adicionarClubeDeFutebol('Arsenal', 'medio', false)
adicionarClubeDeFutebol('Napoli', 'medio', false)
adicionarClubeDeFutebol('Sevilla', 'medio', false)
adicionarClubeDeFutebol('Porto', 'medio', false)
adicionarClubeDeFutebol('Benfica', 'medio', false)
adicionarClubeDeFutebol('AS Roma', 'medio', false)
adicionarClubeDeFutebol('Atalanta', 'dificil', false)
adicionarClubeDeFutebol('Zenit', 'dificil', false)
adicionarClubeDeFutebol('RB Leipzig', 'dificil', false)
adicionarClubeDeFutebol('Villarreal', 'dificil', false)
adicionarClubeDeFutebol('Lazio', 'dificil', false)
adicionarClubeDeFutebol('Shakhtar Donetsk', 'dificil', false)
adicionarClubeDeFutebol('Lyon', 'dificil', false)
adicionarClubeDeFutebol('Monaco', 'dificil', false)
adicionarClubeDeFutebol('Ajax', 'dificil', false)
adicionarClubeDeFutebol('PSV Eindhoven', 'dificil', false)

function adicionarClubeDeFutebol(clube, dificuldade, jaFoiAcertado = false){
    const objeto = {
        nome: clube,
        dificuldade: dificuldade,
        jaFoiAcertado: jaFoiAcertado
    }
    clubesDeFutebol.push(objeto)
}