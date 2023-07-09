export function getKdrFromTitle( title ) {
    const regexp = /KDR:\s+(\d+\.\d+)\s/g;
    return Array.from( title.matchAll( regexp ), m => m[1] )[0];
}