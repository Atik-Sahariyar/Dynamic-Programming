/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    cost.push(0)
    for(let i = n -3; i >= 0; i--){
        cost[i] += Math.min(cost[i+1], cost[i+2])
    }
   return Math.min(cost[0], cost[1])
};

