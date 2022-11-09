function taxaDeJuros(montante, capitalInicial, meses) {
    let juros = `${Math.pow((montante / capitalInicial), (1 / meses)) - 1}`;
    return `O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${(juros * 100).toFixed(3)}%, pois após ${meses} meses você teve que pagar ${montante} reais.`;
}

console.log(taxaDeJuros(90000, 60000, 24))