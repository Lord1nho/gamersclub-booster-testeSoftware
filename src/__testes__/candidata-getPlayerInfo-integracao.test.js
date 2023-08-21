import { getPlayerInfo } from "../content-scripts/lobby/getPlayerInfo";
// !!!!!! SE PA ESSA FUNÇÃO FUNCIONARIA MELHOR NUM TEST UNITARIO E NAO NUM DE INTEGRAÇÃO E EU TO MALUCO
describe('Teste de integração da getPlayerInfo', () => {
  it('busca as informações do jogador corretamente', async () => {
    // Simula a resposta da chamada HTTP
    const htmlResponse = `
      <div class="gc-list-title">Registrado em</div>
      <div>2023-08-21</div>
      <div class="gc-card-history-text">10</div>
      <span>Vitórias: 5</span>
      <span>Derrotas: 2</span>`;

    // Mock da função $.get para retornar a resposta simulada
    jest.spyOn($, 'get').mockImplementation((url, callback) => {
      callback(htmlResponse);
    });

    const id = '123';
    const playerInfo = await getPlayerInfo(id);

    // Verifique se as informações retornadas são as esperadas
    expect(playerInfo.dataCriacao).toBe('2023-08-21');
    expect(playerInfo.totalPartidas).toBe(10);
    expect(playerInfo.totalVitorias).toBe(5);
    expect(playerInfo.totalDerrotas).toBe(2);
    expect(playerInfo.porcentagemVitoria).toBe('71.43'); // Valor calculado: (5 / (5 + 2)) * 100 = 71.43

    // Restaura a implementação original da função $.get após o teste
    $.get.mockRestore();
  });
});