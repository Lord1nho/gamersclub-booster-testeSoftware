import { getKdrFromTitle } from "../content-scripts/lobby/getKdrFromTitle";

test('retorna o valor do KDR a partir do título', () => {
  const title = 'Player Stats - KDR: 1.75 Kills: 100 Deaths: 57';
  const result = getKdrFromTitle(title);

  expect(result).toBe('1.75');
});

//mais um caso de teste
test('retorna null para um título sem informacoes de KDR', () => {
  const title = 'Player Stats - Kills: 100 Deaths: 50';
  const expectedKDR = null;
  const result = getKdrFromTitle(title);

  expect(result).toEqual(expectedKDR);
});