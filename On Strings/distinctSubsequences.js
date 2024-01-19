/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = (s, t) => {
    if(s.length < t.length) return 0;
    [s, t] = [t, s];

    let m = s.length;
    let n = t.length;
    let arr = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));

    for(let j = 0; j <= n; j++){
        arr[0][j] = 1;
    }

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(s[i-1] === t[j-1]){
                arr[i][j] = arr[i][j-1] + arr[i-1][j-1];
            } else {
                arr[i][j] = arr[i][j-1]
            }
        }
    }
   
   return arr[m][n];
};