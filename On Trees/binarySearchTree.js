/**
 * @param {number} n
 * @return {number}
 */
const numTrees = (n) => {
    const ans = [1,1];
   
    for(let i = 2; i <= n; i++){
        ans[i] = 0
        console.log('1st: ',ans[i])
        for(let j = 1; j <= i; j++){
            ans[i] += ans[i - j]*ans[j - 1];
             console.log('2nd: ', ans[i])
        }
    }
     
   return ans[n]
};

numTrees(4)