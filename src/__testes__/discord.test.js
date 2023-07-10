import { getWarmupTime, getTeamInfo } from '../lib/getWarmup_getTeam';
import { JSDOM } from 'jsdom';

describe('Chamando funções do discord', () => {
    it('chama a função getWarmupTime - 1', () => {
      /*
      primeira versão do teste
      const warmupexpires = 10; // Exemplo: 10 segundos
      const result = getWarmupTime(warmupexpires);
      expect(result).toMatch(/^Até: \d{2}:\d{2}:\d{2}/); // Verifica se o resultado está no formato esperado, ignorando o restante da string
    */
      const warmupexpires = 10; // Exemplo: 10 segundos
      const result = getWarmupTime(warmupexpires);
      expect(result).toMatch(/^Até: \d{2}:\d{2}:\d{2}/); // Verifica se o resultado está no formato esperado, ignorando o restante da string
      
    });
    it('chama a função getWarmupTime - 2', () => {
      const warmupexpires = -10; // Exemplo: 10 segundos
      const result = getWarmupTime(warmupexpires);
      if (warmupexpires<=0){
        expect(result).toBe('Acabou!'); // Verifica se o resultado está no formato esperado, ignorando o restante da string
      }else{
      expect(result).toMatch(/^Até: \d{2}:\d{2}:\d{2}/); // Verifica se o resultado está no formato esperado, ignorando o restante da string
      }
    });

    it('chama a função getTeamInfo - dados de level e nick enviados', () => {
      const membersFull = {
        data: {
          players: [{ level: 'teste-level', nick: 'teste-nick'}]
        }
      };

      const result1 = getTeamInfo(membersFull.data);

      expect(result1).toBe('teste-level - teste-nick \n');
    });

    it('chama a função getTeamInfo - dados vazios', () => {
      const membersFull = {
        data: {
          players: [{ level: '', nick: ''}]
        }
      };

      const result1 = getTeamInfo(membersFull.data);

      expect(result1).toBe('- \n');

    });

  });