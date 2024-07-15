export function substituirAcentoDaPalavra(palavra) {
    if (palavra.includes("á")) {
        const novaPalavra = palavra.replace('á', 'a')
        return novaPalavra
    } else if (palavra.includes("é")) {
        const novaPalavra = palavra.replace('é', 'e')
        return novaPalavra
    } else if (palavra.includes("í")) {
        const novaPalavra = palavra.replace('í', 'i')
        return novaPalavra
    } else if (palavra.includes("ó")) {
        const novaPalavra = palavra.replace('ó', 'o')
        return novaPalavra
    } else if (palavra.includes("ú")) {
        const novaPalavra = palavra.replace('ú', 'u')
        return novaPalavra
    } else if (palavra.includes("ã")) {
        const novaPalavra = palavra.replace('ã', 'a')
        return novaPalavra
    } else if (palavra.includes("õ")) {
        const novaPalavra = palavra.replace('õ', 'o')
        return novaPalavra
    } else if (palavra.includes("ê")) {
        const novaPalavra = palavra.replace('ê', 'e')
        return novaPalavra
    } else {
        return palavra
    }
}