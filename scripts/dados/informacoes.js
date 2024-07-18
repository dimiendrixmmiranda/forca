import { clubesBrasileiros } from "./clubesBrasileiros.js"
import { clubesEuropeus } from "./clubesEuropeus.js"
import { estadios } from "./estadios.js"
import { jogadoresAposentados } from "./jogadoresAposentados.js"
import { jogadoresEmAtividade } from "./jogadoresEmAtividade.js"
import { objetos } from "./objetos.js"
import { regras } from "./regras.js"
import { selecoes } from "./selecoes.js"
import { tecnicos } from "./tecnicos.js"

export const informacoes = JSON.parse(localStorage.getItem("informacoes")) ||
    [
        {
            categoria: 'clubes-brasileiros',
            arrayDeInformacoes: clubesBrasileiros
        },
        {
            categoria: 'clubes-europeus',
            arrayDeInformacoes: clubesEuropeus
        },
        {
            categoria: 'jogadores-em-atividade',
            arrayDeInformacoes: jogadoresEmAtividade
        },
        {
            categoria: 'jogadores-aposentados',
            arrayDeInformacoes: jogadoresAposentados
        },
        {
            categoria: 'selecoes',
            arrayDeInformacoes: selecoes
        }, {
            categoria: 'tecnicos',
            arrayDeInformacoes: tecnicos
        },
        {
            categoria: 'estadios',
            arrayDeInformacoes: estadios
        }, {
            categoria: 'regras',
            arrayDeInformacoes: regras
        },
        {
            categoria: 'objetos',
            arrayDeInformacoes: objetos
        }
    ]