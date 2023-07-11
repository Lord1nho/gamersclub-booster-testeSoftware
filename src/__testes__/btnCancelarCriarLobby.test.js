import $ from 'jquery';
import { JSDOM } from 'jsdom';
import { adicionarBotaoCancelarCriarLobby } from '../content-scripts/lobby/btnCancelarCriarLobby';

/* Configuração do jsdom
const { window } = new JSDOM();
global.document = window.document;
global.$ = $;

// Mock do elemento HTML com o id "criarLobbyBtn"
document.body.innerHTML = '<button id="criarLobbyBtn">Criar Lobby</button>';


// Teste da função adicionarBotaoCancelarCriarLobby
test('btnCancelarCriarLobby adiciona corretamente o botão de cancelar', () => {
  // Chama a função para adicionar o botão de cancelar
  adicionarBotaoCancelarCriarLobby();

  // Verifica se o botão foi alterado corretamente
  const botaoCancelar = $('#criarLobbyBtn');
  expect(botaoCancelar.css('background-color')).toBe('red');
  expect(botaoCancelar.css('border-radius')).toBe('4px');
  expect(botaoCancelar.text()).toBe('Cancelar Criação...');
  expect(botaoCancelar.hasClass('Cancelar')).toBe(true);
});*/

// Teste com melhorias
describe('adicionar botão cancelar criar Lobby', () =>{
  beforeEach(() => {
    const { window } = new JSDOM();
    global.document = window.document;
    global.$ = $;

    // Mock do elemento HTML com o id "criarLobbyBtn"
    document.body.innerHTML = '<button id="criarLobbyBtn">Criar Lobby</button>';
  });

  test('adiciona corretamente o botão de cancelar', () => {
    // Chama a função para adicionar o botão de cancelar
    adicionarBotaoCancelarCriarLobby();
  
    // Verifica se o botão foi alterado corretamente
    const botaoCancelar = $('#criarLobbyBtn');
    
    //Foram utilizados os métodos toHaveStyle, toHaveText e toHaveClass do Jest para verificar as alterações no estilo, texto e classe do botão.
    expect(botaoCancelar).toHaveStyle('background-color: red');
    expect(botaoCancelar).toHaveStyle('border-radius: 4px');
    expect(botaoCancelar).toHaveText('Cancelar Criação...');
    expect(botaoCancelar).toHaveClass('Cancelar');
  });

  test('não deve adicionar o botão de cancelar se já estiver presente', () =>{
    // Adiciona manualmente o botão de cancelar
    document.body.innerHTML = '<button id="criarLobbyBtn" class="Cancelar">Cancelar Criação...</button>';

    // Chama a função para adicionar o botão de cancelar novamente
    adicionarBotaoCancelarCriarLobby();

    // Verifica se o botão não foi alterado
    const botaoCancelar = $('#criarLobbyBtn');

    expect(botaoCancelar).not.toHaveStyle('background-color: red');
    expect(botaoCancelar).not.toHaveStyle('border-radius: 4px');
    expect(botaoCancelar).not.toHaveText('Cancelar Criação...');
    expect(botaoCancelar).toHaveClass('Cancelar');
  });
});