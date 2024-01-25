/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
    const n = prices.length;
    let bestInCash = 0;
    let bestWithStock = -Infinity;
 
    for(let i = 0; i < n; i++){
        let buyThisRound = bestInCash - prices[i];
        let sellThisRound = bestWithStock + prices[i] - fee;
 
        bestInCash = Math.max(bestInCash, sellThisRound);
        bestWithStock = Math.max(bestWithStock, buyThisRound)
    }
 
    return Math.max(bestWithStock, bestInCash);
 };