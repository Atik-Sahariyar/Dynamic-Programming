/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit =  (k, prices) => {
    let n = prices.length;
    let arr = new Array(2*k + 1).fill(0);
    let curr = new Array(2*k + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        for (let tNum = 2*k - 1; tNum >= 0; tNum--) {
            if (tNum % 2 === 0) curr[tNum] = Math.max(-prices[i] + arr[tNum + 1], arr[tNum]);
            else curr[tNum] = Math.max(prices[i] + arr[tNum + 1], arr[tNum])
        }
        arr = curr;
    }
    return arr[0];
};