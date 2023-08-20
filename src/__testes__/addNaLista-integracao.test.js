import { adicionarNaLista } from "../lib/blockList";

describe('Testes da função adicionarNaLista', () => {
  it('deve adicionar um objeto à lista', (done) => {
    const mockStorage = {
      blockList: [],
      get: (keys, callback) => callback(mockStorage),
      set: (data, callback) => {
        mockStorage.blockList = data.blockList;
        callback();
      },
    };

    global.chrome = {
      storage: {
        sync: mockStorage,
      },
    };

    const obj = { id: 1 };

    adicionarNaLista(obj, () => {
      expect(mockStorage.set).toHaveBeenCalledWith(
        { blockList: [obj] },
        expect.any(Function)
      );
      done();
    });
  });
});
