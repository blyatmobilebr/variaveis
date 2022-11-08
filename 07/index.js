function simuladorCovid(populacaoInicial, quantidade, tempo) {
    return populacaoInicial * Math.pow(quantidade, (tempo / 7))
}


console.log(simuladorCovid(1000, 4, 7));