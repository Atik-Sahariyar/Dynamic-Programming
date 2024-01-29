/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = (nums, target) => {
    if (!nums.length) return 0;
    const arr = new Array(target + 1).fill(0);
    arr[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (const n of nums) {
            if (n <= i) {
                arr[i] += arr[i - n]
            }
        }
    }
    const result = arr[target];
    return result;
};