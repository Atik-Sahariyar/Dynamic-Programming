/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxUncrossedLines = (nums1, nums2) => {
    const n1 = nums1.length;
    const n2 = nums2.length;
    let arr = Array.from(Array(n1 + 1), () => new Array(n2 + 1).fill(0));

    for(let i = 0; i < n1; i++){
        for(let j = 0; j < n2; j++){
        if(nums1[i] === nums2[j]){
            arr[i + 1][j + 1] = 1 + arr[i][j];
        } else {
            arr[i + 1][j + 1] = Math.max(arr[i][j + 1], arr[i + 1][j])
        }
        }
    }

    return arr[n1][n2];
};