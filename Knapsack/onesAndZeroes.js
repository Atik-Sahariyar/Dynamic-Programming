/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = (strs, m, n) => {
    if(!strs.length) return 0;
    
    const arr = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    for(let str of strs){
         let strZero = 0, strOne = 0;
         for(let c of str){
             if(c == "0") strZero++;
             else strOne++
         }

         for(let j = m; j >= strZero; j--){
             for(let k = n; k >= strOne; k--){
                 arr[j][k] = Math.max(arr[j][k], arr[j - strZero][k - strOne] + 1)
             }
         }
    }

    return arr[m][n]
};