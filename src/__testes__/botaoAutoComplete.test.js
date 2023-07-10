import { getMapCode } from "../content-scripts/lobby/getCode";

const preVetosMaps = [
    {
      mapa: 'de_dust2',
      codigo: 1
    },
    {
      mapa: 'de_nuke',
      codigo: 2
    },
    /*{
      mapa: 'de_train',
      codigo: 3
    },*/
    {
      mapa: 'de_mirage',
      codigo: 4
    },
    {
      mapa: 'de_overpass',
      codigo: 5
    }
  ];
  
describe('getMapCode', () => {
    it('retorna o código correto para um mapa existente', () => {
      const mapa = 'de_nuke';
      const expected = 2;
      const result = getMapCode(mapa, preVetosMaps);
      expect(result).toEqual(expected);
    });
  
    it('retorna null para um mapa inexistente', () => {
      const mapa = 'de_train';
      const expected = null;
      const result = getMapCode(mapa, preVetosMaps);
      expect(result).toEqual(expected);
    });
});