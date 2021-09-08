const index = require('./index')

test('Calcular segundo grau 1', () => {
    const result = index.solucaoSegundoGrau(4,0,-16);
    expect(result).toEqual({"x1": 2, "x2": -2});
})

test('Calcular segundo grau 2', () => {
    const result = index.solucaoSegundoGrau(1,-3,0);
    expect(result).toEqual(3);
})

test('Calcular segundo grau 3', () => {
    const result = index.solucaoSegundoGrau(2,-3,-5);
    expect(result).toEqual({"x1": 2.5, "x2": -1});
})

test('Calcular segundo grau 4', () => {
    const result = index.solucaoSegundoGrau(3,-6,-9);
    expect(result).toEqual({"x1": 3, "x2": -1});
})

test('Calcular segundo grau 5', () => {
    const result = index.solucaoSegundoGrau(0,4,-16);
    expect(result).toEqual(4);
    //teste com resultado invalido, pois o programa retorna sempre 0 se a for nulo, já que não é possivel calcular uma euqção de segundo grau com a = 0 (o resultado correto seria 0).
})


test('Calcular primeiro grau 1', () => {
    const result = index.solucaoPrimeiroGrau(4,-16);
    expect(result).toEqual(4);
})

test('Calcular primeiro grau 2', () => {
    const result = index.solucaoPrimeiroGrau(1,-2);
    expect(result).toEqual(2);
})

test('Calcular primeiro grau 3', () => {
    const result = index.solucaoPrimeiroGrau(4,32);
    expect(result).toEqual(-8);
})

test('Calcular primeiro grau 4', () => {
    const result = index.solucaoPrimeiroGrau(0,-16);
    expect(result).toEqual(-16);
    //teste com resultado invalido, visto que 0x -16 = 0 não é algo verdadeiro (o resultado correto seria 0).
})

test('Calcular primeiro grau 5', () => {
    const result = index.solucaoPrimeiroGrau(2,-1);
    expect(result).toEqual(0.5);
})



