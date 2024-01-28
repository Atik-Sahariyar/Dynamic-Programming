/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n) => {
    let isSquare = x => Math.floor(Math.sqrt(x))**2 === x;
    
    if(isSquare(n)) return 1;

    while(n%4 === 0){
        n = n / 4;
    }
    if(n % 8 === 7){
        return 4
    }

    for(let i = 0; i <= n; i++){
        if(isSquare(n - i*i)){
            return 2
        }
    }
    
    return 3
};
