/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
const countGoodStrings = (low, high, zero, one) => {
    const mod = 1e9 + 7;
    const dp = new Array(high + 1).fill(0);

    let result = 0;
    dp[0] = 1;

    for(let i = 1; i <= high; i++){
        dp[i] = ((i >= zero ? dp[i - zero] : 0) + (i >= one ? dp[i - one] : 0)) % mod;

        if(i >= low && i <= high){
            result = (result + dp[i]) % mod
        }
    }

    return result
};