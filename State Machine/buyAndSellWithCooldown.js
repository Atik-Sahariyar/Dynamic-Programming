/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit =  (prices) => {
    const n = prices.length;

    if (n <= 1) return 0;
    
    const buy = Array(n).fill(0);
    const sell = Array(n).fill(0);
    const cooldown = Array(n).fill(0);

    // Base case : the first day
    buy[0] = -prices[0];
    sell[0] = 0;
    cooldown[0] = 0;

    for(let i = 1; i < n; i++){
        buy[i] = Math.max(cooldown[i - 1] - prices[i], buy[i - 1]);
        sell[i] = Math.max(buy[i - 1] + prices[i], sell[i - 1]);
        cooldown[i] = Math.max(cooldown[i - 1], sell[i - 1]);
    }

    return Math.max(sell[n - 1], cooldown[n - 1]);

};