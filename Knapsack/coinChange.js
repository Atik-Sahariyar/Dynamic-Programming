/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
    const arr = new Array(amount + 1).fill(0);
    arr[0] = 1;

    for(let coin of coins){
        for(let j = coin; j <= amount; j++){
            arr[j] += arr[j - coin];
        }
    }
    
    return arr[amount]
};