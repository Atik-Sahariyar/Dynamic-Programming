/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn =  (nums) => {

    const maxNum = Math.max(...nums);

    const freq = new Array(maxNum + 1).fill(0);
    for (const num of nums) {
        freq[num]++;
    }

    let dp = new Array(maxNum + 1).fill(0);

    dp[1] = freq[1] * 1;


    for (let i = 2; i <= maxNum; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + i * freq[i]);
    }

    return dp[maxNum];
};

