function distanciaEntreDoisPontos(x1, y1, x2, y2) {
    let resultado = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));

    return resultado;
}


console.log(distanciaEntreDoisPontos(1,1,1,4));