import { clubesBrasileiros } from "./clubesBrasileiros.js"
import { clubesEuropeus } from "./clubesEuropeus.js"
import { estadios } from "./estadios.js"
import { jogadoresAposentados } from "./jogadoresAposentados.js"
import { jogadoresEmAtividade } from "./jogadoresEmAtividade.js"
import { objetos } from "./objetos.js"
import { regras } from "./regras.js"
import { selecoes } from "./selecoes.js"
import { tecnicos } from "./tecnicos.js"

export const informacoes = []
informacoes.push({
    categoria:'clubes-brasileiros', 
    arrayDeInformacoes: clubesBrasileiros
})
informacoes.push({
    categoria:'clubes-europeus', 
    arrayDeInformacoes: clubesEuropeus
})
informacoes.push({
    categoria:'jogadores-em-atividade', 
    arrayDeInformacoes: jogadoresEmAtividade
})
informacoes.push({
    categoria:'jogadores-aposentados', 
    arrayDeInformacoes: jogadoresAposentados
})
informacoes.push({
    categoria:'selecoes', 
    arrayDeInformacoes: selecoes
})
informacoes.push({
    categoria:'tecnicos', 
    arrayDeInformacoes: tecnicos
})
informacoes.push({
    categoria:'estadios', 
    arrayDeInformacoes: estadios
})
informacoes.push({
    categoria:'regras', 
    arrayDeInformacoes: regras
})
informacoes.push({
    categoria:'objetos', 
    arrayDeInformacoes: objetos
})