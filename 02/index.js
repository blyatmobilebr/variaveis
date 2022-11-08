function convertToCelsius(temperatura) {
    return Math.round((temperatura - 32) * 5/9);
}

console.log(convertToCelsius(73));