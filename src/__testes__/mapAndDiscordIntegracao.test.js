//Testando a função sendMatchInfo em conjunto com a função getMapImage.
import jest from "jest";
import {sendMatchInfo} from "../lib/getWarmup_getTeam";
import { getMapImage } from "../lib/maps";

//Foi criado o objeto de teste gcMatch que simula os dados de uma partida.



describe('TEste de integração', () => {
  test('integração sendMatchInfo com getMapImage', async () => {
    const gcMatch = {
      teamA: {
        admin: {
          nick: 'AdminA'
        },
        averageLevel: 5
      },
      teamB: {
        admin: {
          nick: 'AdminB'
        },
        averageLevel: 4
      },
      ip: '127.0.0.1',
      password: 'matchpass',
      map: {
        name: 'de_mirage'
      },
      warmupExpiresInSeconds: 60,
      gameId: '12345'
    };

    // Mock da função getMapImage         //nao to entendendoo pq ta dando erro aquiii. O objeto pro gcMatch ta certinho. Só se for algo na hora de pegar essas urls dos mapas
    const originalGetMapImage = getMapImage(gcMatch.map);

    // Mock da função sendMatchInfo
    const originalSend = send;
    send = jest.fn((url, data) => {
      mockSend(url, data);
    });

    await sendMatchInfo('oi', gcMatch);

    expect(originalGetMapImage).toHaveBeenCalledWith('de_mirage');
    
    expect(send).toHaveBeenCalledWith('mocked-url', expect.objectContaining({
      image: {
        url: originalGetMapImage
    }
  }));

    // Restaura as funções originais
    getMapImage = originalGetMapImage;
    send = originalSend;
  });
});