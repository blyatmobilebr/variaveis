function calcularDesconto(valorDisponivel, valorDoProduto) {
    let resultado = valorDisponivel * 100 / valorDoProduto;

    return `O valor do desconto é de: ${resultado.toFixed(2)}%`;
}

console.log(calcularDesconto(50, 110));