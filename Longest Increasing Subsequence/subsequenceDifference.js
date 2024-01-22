/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
const longestSubsequence = (arr, difference) => {
    let dp = {};
    let maxLength = 0;

    for(let n of arr){
        if(n - difference in dp){
            dp[n] = dp[n - difference] + 1;
        } else {
            dp[n] = 1;
        }
        maxLength = Math.max(maxLength, dp[n]);
    }

    return maxLength;
};

// const arr = [1,2,3,4], difference = 1;

// console.log(longestSubsequence(arr, difference))