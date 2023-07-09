import { randomIntFromInterval } from "../content-scripts/lobby/randomIntForInterval";

test('retorna um número inteiro dentro do intervalo especificado', () => {
    const min = 1;
    const max = 10;
  
    const result = randomIntFromInterval(min, max);
  
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
});