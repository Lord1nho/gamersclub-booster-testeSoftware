import { getKdrFromTitle } from "../content-scripts/lobby/getKdrFromTitle";

test('retorna o valor do KDR a partir do título', () => {
  const title = 'Player Stats - KDR: 1.75 Kills: 100 Deaths: 57';
  const result = getKdrFromTitle(title);

  expect(result).toBe('1.75');
});
