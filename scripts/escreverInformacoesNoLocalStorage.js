import { informacoes } from "./dados/informacoes.js";

export function escreverInformacoesNoLocalStorage() {
    localStorage.setItem("informacoes", JSON.stringify(informacoes))
}
