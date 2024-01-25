/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = (s) => {
   
    const n = s.length;
    const arr = Array(n).fill(0);
 
    for(let i = n - 2; i >= 0; --i){
        let prev = 0;
        for(let j = i+1; j < n; ++j){
            const cur = arr[j];
            arr[j] = s[i] === s[j] ? prev : Math.min(arr[j], arr[j-1]) + 1;
            prev = cur;
        }
    }
 
    return arr[n-1]
 
 };