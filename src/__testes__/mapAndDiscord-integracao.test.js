//Testando a função sendMatchInfo em conjunto com a função getMapImage.
import {sendMatchInfo} from "../lib/getWarmup_getTeam";
import { getMapImage } from "../lib/maps";

//Foi criado o objeto de teste gcMatch que simula os dados de uma partida.

const testCases = [
  { mapa: 'de_mirage'},
  { mapa: 'de_dust2'},
  { mapa: 'de_nuke'},
  { mapa: 'de_vertigo'},
  { mapa: 'de_train'},
  { mapa: 'de_overpass'},
  { mapa: 'de_inferno'},
  { mapa: 'de_cbble_classic'},
  { mapa: 'de_ancient'},
  { mapa: 'de_tuscan'},
  { mapa: 'de_anubis'},
  { mapa: 'de_cache'},
];

describe('Teste de integração', () => {
  test.each(testCases)('integração sendMatchInfo com getMapImage - %s', async (testCase) => {
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
        name: testCase.mapa
      },
      warmupExpiresInSeconds: 60,
      gameId: '12345'
    };

    // Mock da função getMapImage
    const originalGetMapImage = getMapImage(gcMatch.map);

    // Mock da função sendMatchInfo
    const mockSend = (url, data) =>{
      console.log('send mock', url, data);
    };
    const originalSend = global.send;
    global.send = mockSend;

    await sendMatchInfo('url_mock', gcMatch);

    expect(originalGetMapImage).toHaveBeenCalledWith(testCase.mapa);
    
    // Restaura as funções originais
    getMapImage = originalGetMapImage;
    global.send = originalSend;
  });
});