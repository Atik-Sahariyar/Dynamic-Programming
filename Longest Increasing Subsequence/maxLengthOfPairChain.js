/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    const sorted = pairs.sort((a,b) => a[1] - b[1]);
    let prev = pairs[0];
    let res = 1;

    for(let i = 0; i < pairs.length; i++){
        const cur = pairs[i];
    
        if(cur[0] > prev[1]){
            res++;
            prev = cur;
        }
    }

    return res;
};

// const pairs = [[1,2],[2,3],[3,4]]
// const pairs2 = [[1,2],[7,8],[4,5]]
// findLongestChain(pairs)
// findLongestChain(pairs2)