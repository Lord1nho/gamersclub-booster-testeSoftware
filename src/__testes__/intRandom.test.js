import { randomIntFromInterval } from "../content-scripts/lobby/randomIntForInterval";

/*test('retorna um número inteiro dentro do intervalo especificado', () => {
    const min = 1;
    const max = 10;
  
    const result = randomIntFromInterval(min, max);
  
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
});*/

//teste com melhorias
test('retorna um número inteiro dentro do intervalo especificado', () => {
    const min = -10;
    const max = 10;

    //adicionado um laço for para testar a aleatoriedade dos números gerados e se estão sempre dentro do intervalo especificado.
    for (let i = 0; i<50; i++){
        const result = randomIntFromInterval(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        //console.log(result);
    }
});