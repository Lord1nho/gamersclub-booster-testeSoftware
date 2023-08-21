import { adicionarNaLista } from "../lib/blockList";
//!!!!! PROVAVELMENTE POR ELA USAR ESSA API DE 'CHROME STORAGE' É UMA MERDA FAZER TESTE NELA E DA ESSES ERROS NO MOCK. Então pode excluir se quiser
describe('Testes da função adicionarNaLista', () => {
  it('deve adicionar um objeto à lista', () => {
    const mockGet = (keys, callback) => callback({ blockList: [] });
    const mockSet = (data, callback) => {
      if (typeof callback === 'function') {
        callback();
      }
    };

    global.chrome = {
      storage: {
        sync: {
          get: mockGet,
          set: mockSet,
        },
      },
    };

    const obj = { id: 1 };

    adicionarNaLista(obj, () => {});

    expect(mockGet).toHaveBeenCalledWith(['blockList'], expect.any(Function));
    expect(mockSet).toHaveBeenCalledWith(
      { blockList: [obj] },
      expect.any(Function)
    );
  });
});
