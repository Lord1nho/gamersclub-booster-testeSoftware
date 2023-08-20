//funções separadas lá do discord.js
import { getMapImage } from "./maps"; //Import da getMapImage

export function getWarmupTime( warmupexpires ) {
  if ( warmupexpires <= 0 ) { return 'Acabou!'; }
  const now = new Date();
  now.setSeconds( now.getSeconds() + warmupexpires );
  return `Até: ${now.toTimeString()}`;
}

export function getTeamInfo( data ) {
  const membersFull = data.players;
  const membersString = membersFull.map( function ( e ) {
    return `${e.level} - ${e.nick} \n`;
  } );

  return membersString.join( '' );
}

//adicionada recentemente para o teste de integração
export async function sendMatchInfo( url, gcMatch ) {
  if ( typeof gcMatch !== 'object' ) {
    return false;
  }

  await send( url, {
    color: '2391737',
    fields: [
      {
        name: `Time ${gcMatch.teamA.admin.nick} - ` + gcMatch.teamA.averageLevel,
        value: getTeamInfo( gcMatch.teamA )
      },
      {
        name: `Time ${gcMatch.teamB.admin.nick} - ` + gcMatch.teamB.averageLevel,
        value: getTeamInfo( gcMatch.teamB )
      },
      {
        name: 'IP da partida:',
        value: `connect ${gcMatch.ip};password ${gcMatch.password} \nsteam://connect/${gcMatch.ip}/${gcMatch.password}`
      },
      {
        name: 'Mapa:',
        value: gcMatch.map.name
      },
      {
        name: 'Warmup',
        value: getWarmupTime( gcMatch.warmupExpiresInSeconds )
      },
    ],
    image: {
      url: getMapImage( gcMatch.map.name )
    }
  } );
}