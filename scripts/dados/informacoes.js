import { clubesDeFutebol } from "./clubesDeFutebol.js";
import { estadios } from "./estadios.js";
import { jogadoresAposentados } from "./jogadoresAposentados.js";
import { jogadoresAtuais } from "./jogadoresAtuais.js";
import { selecoes } from "./selecoes.js";
import { tecnicos } from "./tecnicos.js";

export const informacoes = []

informacoes.push({
    categoria: 'clubesDeFutebol', 
    arrayDeInformacoes: clubesDeFutebol
})
informacoes.push({
    categoria: 'jogadoresAtuais', 
    arrayDeInformacoes: jogadoresAtuais
})
informacoes.push({
    categoria: 'jogadoresAposentados', 
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