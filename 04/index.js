function calcularJurosCompostos(capital, taxaFixaDeJuros, periodo) {
    let resultado = capital * ((1 + taxaFixaDeJuros) ** periodo);

    return `O montante é de: R\$${resultado.toFixed(2)}`;
}


console.log(calcularJurosCompostos(1000, 0.125, 5));