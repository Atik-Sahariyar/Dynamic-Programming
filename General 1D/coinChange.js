/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    const arr = new Array(amount + 1).fill(Infinity);
    arr[0] = 0;

    for(let i = 1; i <= amount; i++){
        for(let coin of coins){
            if(i - coin >= 0){
               arr[i] = Math.min(arr[i],arr[i - coin] + 1);
            }
        }
    }

    return arr[amount] !== Infinity ?arr[amount] : -1;
};