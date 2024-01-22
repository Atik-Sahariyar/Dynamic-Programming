/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    let n = nums.length;
    if(n <= 2) return n;

    let dp = new Array(n).fill(0).map(() => new Map());

    let max = 2;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let diff = nums[j] - nums[i];
            let prevLen = dp[i].has(diff) ? dp[i].get(diff) : 1;
            dp[j].set(diff, prevLen + 1);
            max = Math.max(max, prevLen  + 1);

        }
    }

    return max;
};