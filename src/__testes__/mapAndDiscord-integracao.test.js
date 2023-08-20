//Testando a função sendMatchInfo em conjunto com a função getMapImage.
import {sendMatchInfo} from "../lib/getWarmup_getTeam";
import { getMapImage } from "../lib/maps";

//Foi criado o objeto de teste gcMatch que simula os dados de uma partida.

describe('Teste de integração', () => {
  test('integração sendMatchInfo com getMapImage - Mirage', async () => {

    const gcMatch = {
      teamA: {
        admin: {
          nick: 'AdminA'
        },
        averageLevel: 5,
        players: [
          { level: 5, nick: "Player1"},
          { level: 5, nick: "Player2"},
          { level: 4, nick: "Player3"}
        ]
      },
      teamB: {
        admin: {
          nick: 'AdminB'
        },
        averageLevel: 4,
        players: [
          { level: 4, nick: "Player4"},
          { level: 3, nick: "Player5"},
          { level: 3, nick: "Player6"}
        ]
      },
      ip: '127.0.0.1',
      password: 'matchpass',
      map: {
        name: 'de_mirage'
      },
      warmupExpiresInSeconds: 60,
      gameId: '12345'
    };

    const originalGetMapImage = getMapImage(gcMatch.map);

    // Mock da função sendMatchInfo
    const mockSend = (url, data) =>{
      console.log('send mock', url, data);
    };
    const originalSend = global.send;
    global.send = mockSend;

    await sendMatchInfo('url_mock', gcMatch);

    expect(originalGetMapImage).toHaveBeenCalledWith('de_mirage');
    
    // Restaura as funções originais
    getMapImage = originalGetMapImage;
    global.send = originalSend;
  });
});