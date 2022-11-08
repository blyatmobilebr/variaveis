function calcularIMC(peso, altura) {
    let resultado = peso / (altura ** 2);

    return resultado.toFixed(1);
}

console.log(calcularIMC(76, 1.79));