/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    let maxReverse = 0;
    let maxProfitReverse = 0;
    let maxProfitReverseArray = new Array(n).fill(0);

    let min = Infinity;
    let maxProfit = 0;
    let maxTotalProfit = 0;

    for (let i = n - 1; i >= 0; i--) {
        let currentPrice = prices[i];
        if (currentPrice > maxReverse) {
            maxReverse = currentPrice;
        }
        let profit = maxReverse - currentPrice;
        if (profit > maxProfitReverse) {
            maxProfitReverse = profit;
        }
        maxProfitReverseArray[i] = maxProfitReverse;
    }
   
    for (let j = 0; j < n; j++) {
        let currentPrice = prices[j];
        if (currentPrice < min) {
            min = currentPrice;
        }
        let profit = currentPrice - min;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
        let totalProfit = maxProfit + maxProfitReverseArray[j];
        if (totalProfit > maxTotalProfit) {
            maxTotalProfit = totalProfit;
        }
    }

    return maxTotalProfit;
};