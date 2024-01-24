/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
    const n1 = text1.length;
    const n2 = text2.length;
    let arr = new Array(n1 + 1).fill(null).map(() => new Array(n2 + 1).fill(0));

    for(let i =  1; i <= n1; i++){
        for(let j = 1; j <= n2; j++){
            if(text1[i - 1] === text2[j-1]){
                arr[i][j] = arr[i - 1][j - 1] + 1;
            } else {
                arr[i][j] = Math.max(arr[i- 1][j], arr[i][j - 1]);
            }
        }
    }

    return arr[n1][n2]
};