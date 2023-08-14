1º - Função sendMatchInfo (discord.js) junto com a getMapInfo(maps)
Método: Podemos criar um objeto pra gcMatch, um para a URL(que vai usar getMapInfo) + fazer o mock pra poder chamar as funções dentro da sendMatchInfo


2º - listaBloqueio (listaBloqueio.js) : utiliza api do chrome, e outra função alertaMsg do messageAlerts.js
Método: Podemos criar um mock do mutations, e algumas chamadas de dom. Precisamos refinar melhor em como fazer essa, mas é uma boa candidata