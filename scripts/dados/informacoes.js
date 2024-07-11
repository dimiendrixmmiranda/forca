import { clubesDeFutebol } from "./clubesDeFutebol.js";
import { estadios } from "./estadios.js";
import { jogadoresAposentados } from "./jogadoresAposentados.js";
import { jogadoresAtuais } from "./jogadoresAtuais.js";
import { selecoes } from "./selecoes.js";
import { tecnicos } from "./tecnicos.js";

export const informacoes = []

informacoes.push({
    categoria: 'clubes-de-futebol', 
    arrayDeInformacoes: clubesDeFutebol
})
informacoes.push({
    categoria: 'jogadores-atuais', 
    arrayDeInformacoes: jogadoresAtuais
})
informacoes.push({
    categoria: 'jogadores-aposentados', 
    arrayDeInformacoes: jogadoresAposentados
})
informacoes.push({
    categoria: 'selecoes', 
    arrayDeInformacoes: selecoes
})
informacoes.push({
    categoria: 'tecnicos', 
    arrayDeInformacoes: tecnicos
})
informacoes.push({
    categoria: 'estadios', 
    arrayDeInformacoes: estadios
})