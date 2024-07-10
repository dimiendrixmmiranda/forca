export const tecnicos = []

adicionarTecnico('Pep Guardiola', 'facil', false)
adicionarTecnico('Jürgen Klopp', 'facil', false)
adicionarTecnico('Zinedine Zidane', 'facil', false)
adicionarTecnico('José Mourinho', 'facil', false)
adicionarTecnico('Carlo Ancelotti', 'facil', false)
adicionarTecnico('Diego Simeone', 'facil', false)
adicionarTecnico('Antonio Conte', 'facil', false)
adicionarTecnico('Luis Enrique', 'facil', false)
adicionarTecnico('Tite', 'facil', false)
adicionarTecnico('Mauricio Pochettino', 'facil', false)
adicionarTecnico('Brendan Rodgers', 'medio', false)
adicionarTecnico('Marcelo Bielsa', 'medio', false)
adicionarTecnico('Julian Nagelsmann', 'medio', false)
adicionarTecnico('Thomas Tuchel', 'medio', false)
adicionarTecnico('Ernesto Valverde', 'medio', false)
adicionarTecnico('Gareth Southgate', 'medio', false)
adicionarTecnico('Fernando Santos', 'medio', false)
adicionarTecnico('Roberto Martinez', 'medio', false)
adicionarTecnico('Didier Deschamps', 'medio', false)
adicionarTecnico('Simone Inzaghi', 'medio', false)
adicionarTecnico('Lucien Favre', 'dificil', false)
adicionarTecnico('Unai Emery', 'dificil', false)
adicionarTecnico('Gian Piero Gasperini', 'dificil', false)
adicionarTecnico('Paulo Fonseca', 'dificil', false)
adicionarTecnico('Manuel Pellegrini', 'dificil', false)
adicionarTecnico('Ralf Rangnick', 'dificil', false)
adicionarTecnico('Julen Lopetegui', 'dificil', false)
adicionarTecnico('Jesse Marsch', 'dificil', false)
adicionarTecnico('Marcelo Gallardo', 'dificil', false)
adicionarTecnico('Nuno Espirito Santo', 'dificil', false)


function adicionarTecnico(nome, dificuldade, jaFoiAcertado = false){
    const objeto = {
        nome: nome,
        dificuldade: dificuldade,
        jaFoiAcertado: jaFoiAcertado
    }
    tecnicos.push(objeto)
}

