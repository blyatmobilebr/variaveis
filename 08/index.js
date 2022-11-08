function calculoCirculo(raio) {
    const PI = 3.14159;

    return `O raio é de: ${2 * PI * raio} \nA área é de: ${PI * (raio ** 2)}`;
}


console.log(calculoCirculo(1));