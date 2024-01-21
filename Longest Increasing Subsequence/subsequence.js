/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length;
    let res = 0;
    let maxLen = 0;
    let len = new Array(n).fill(0);
    let cnt = new Array(n).fill(0);

    for(let i = 0; i < n; i++){
        len[i] = cnt[i] = 1;
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                if(len[i] === len[j] + 1){
                    cnt[i] += cnt[j];
                } 
                if(len[i] < len[j] + 1){
                    len[i] = len[j] + 1;
                    cnt[i] = cnt[j];
                }
            }
        }
        if(maxLen === len[i]){
            res += cnt[i];
        }
        if(maxLen < len[i]){
            maxLen = len[i];
            res = cnt[i];
        }
    }
    return res;
};