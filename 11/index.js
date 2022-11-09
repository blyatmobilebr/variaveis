function volumeDaEsfera(diametro) {
    const resultado =  `${(4/3) * ((diametro / 2) ** 3)} PI`;
    return `O volume de uma esfera de raio ${diametro / 2} é ${resultado}` ;
}

console.log(volumeDaEsfera(6));