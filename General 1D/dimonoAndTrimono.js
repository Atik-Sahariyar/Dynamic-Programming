/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const allPieces = [1, 2, 5];

    for(let i = 3; i < n; i++){
        const pieces = 2 * allPieces[i - 1] + allPieces[i -3];
        allPieces.push(pieces % (1e9 + 7));
    }
    return allPieces[n-1];
};