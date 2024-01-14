/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    if(nums.length <= 2) return Math.max(...nums);
    let first = Math.max(nums[0], nums[1]);
    let second = nums[0];
    for(let i = 2; i < nums.length; ++i){
        let current = Math.max(first, second + nums[i]);
        second = first;
        first = current;
    }
    return first
};