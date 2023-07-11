import $ from 'jquery';
import { JSDOM } from 'jsdom';
import { adicionarBotaoCancelarCriarLobby } from '../content-scripts/lobby/btnCancelarCriarLobby';

// Configuração do jsdom
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
});
