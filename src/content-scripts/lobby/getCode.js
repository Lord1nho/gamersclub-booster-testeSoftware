export function getMapCode(mapName, preVetosMaps) {
    if (mapName && mapName.trim() !== '') {
      const matchingMap = preVetosMaps.find(e => e.mapa === mapName);
      return matchingMap ? matchingMap.codigo : null;
    } else {
      return null;
    }
}