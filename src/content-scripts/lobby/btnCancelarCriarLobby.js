export function adicionarBotaoCancelarCriarLobby() {
    $( '#criarLobbyBtn' )
        .css( { 'background-color': 'red', 'border-radius': '4px' } )
        .text( 'Cancelar Criação...' )
        .addClass( 'Cancelar' );
}