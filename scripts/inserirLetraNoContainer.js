import { vereficarSeOJogoAcabou } from "./verificarSeOJogoAcabou.js"

let contadorDeErros = 0

export function inserirLetraNoContainer(palavraSorteada, arrayElementoLetrasPalavraSorteada, imagemDaForca, listaBtnsTeclado, dadosSelecionados) {
    const arrayTecladoBtns = document.querySelectorAll('.game-teclado-btn')
    arrayTecladoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const arrayDeIndices = []
            const letra = e.target
            letra.disabled = true
            const letraSelecionada = letra.innerHTML

            palavraSorteada.split('').forEach((letra, i) => {
                if (letraSelecionada.toLowerCase() == letra.toLowerCase()) {
                    arrayDeIndices.push(i)
                }
            })

            if (arrayDeIndices.length > 0) {
                arrayDeIndices.forEach(indice => {
                    arrayElementoLetrasPalavraSorteada[indice].innerHTML = letraSelecionada
                })
                vereficarSeOJogoAcabou(contadorDeErros, palavraSorteada, dadosSelecionados)
            } else {
                if (contadorDeErros < 6) {
                    contadorDeErros++
                    console.log(imagemDaForca)
                    imagemDaForca.setAttribute('src', `../assets/imgs/forca-${contadorDeErros}.png`)
                    vereficarSeOJogoAcabou(contadorDeErros, palavraSorteada, dadosSelecionados)
                }
            }
        })
    })

    document.addEventListener('keydown', (e) => {
        e.preventDefault()
        const arrayDeIndices = []
        const letraSelecionada = e.key
        
        listaBtnsTeclado.forEach(btn => {
            if (btn.innerHTML.toLowerCase() === letraSelecionada.toLowerCase()) {
                btn.disabled = true

                palavraSorteada.split('').forEach((letra, i) => {
                    if (letraSelecionada.toLowerCase() == letra.toLowerCase()) {
                        arrayDeIndices.push(i)
                    }
                })

                if (arrayDeIndices.length > 0) {
                    arrayDeIndices.forEach(indice => {
                        arrayElementoLetrasPalavraSorteada[indice].innerHTML = letraSelecionada
                    })
                    vereficarSeOJogoAcabou(contadorDeErros, palavraSorteada, dadosSelecionados)
                } else {
                    if (contadorDeErros < 6) {
                        contadorDeErros++
                        imagemDaForca.setAttribute('src', `../assets/imgs/forca-${contadorDeErros}.png`)
                        vereficarSeOJogoAcabou(contadorDeErros, palavraSorteada, dadosSelecionados)
                    }
                }
            }
        })
    })
}