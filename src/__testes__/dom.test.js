import { JSDOM } from 'jsdom';
import { retrieveWindowVariables } from '../lib/dom';

//teste inicial
/*describe('Teste da função retrieveWindowVariables', () => {
  test('Retorna um objeto vazio quando não há variáveis definidas', () => {
    const variables = [];
    const expectedResult = {};

    // Configura o JSDOM
    const dom = new JSDOM('<html><body></body></html>');
    global.document = dom.window.document;

    const result = retrieveWindowVariables(variables);

    expect(result).toEqual(expectedResult);
  });
});*/

//Teste com melhorias
describe('Teste da função retrieveWindowVariables', () => {
  beforeEach(() =>{
    const dom = new JSDOM('<html><body></body></html>');
    global.document = dom.window.document;
  });//configura o ambiente antes de cada teste

  afterEach(() =>{
    delete global.document;
  });//limpa o escopo global após cada teste

  test('Retorna um objeto vazio quando não há variáveis definidas', () => {
    const variables = [];
    const expectedResult = {};

    const result = retrieveWindowVariables(variables);

    expect(result).toEqual(expectedResult);
  });

  test('Retorna as variáveis corretas quando há variáveis definidas', () =>{
    const variables = ['varTest-1', 'varTest-2'];
    const expectedResult = { var1: 'varTest-1', var2: 'varTest-2'};

    // Definir variáveis no window
    global.document.defaultView.var1 = 'varTest-1';
    global.document.defaultView.var2 = 'varTest-2';

    const result = retrieveWindowVariables(variables);

    expect(result).toEqual(expectedResult);
  });
})
