export function gerarElemento(tag, classe, id, conteudo){
    const elemento = document.createElement(tag)
    if(classe){
        elemento.classList.add(classe)
    }
    if(id){
        elemento.id = id
    }
    if(conteudo){
        elemento.innerHTML = conteudo
    }
    return elemento
}