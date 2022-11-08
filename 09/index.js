function somaDosAngulos(numeroDeLados) {
    let soma = (numeroDeLados - 2) * 180;
    return `A soma dos ângulos internos é de: ${soma}°\nO valor de cada ângulo é de: ${soma / numeroDeLados}°`;
}



console.log(somaDosAngulos(6));