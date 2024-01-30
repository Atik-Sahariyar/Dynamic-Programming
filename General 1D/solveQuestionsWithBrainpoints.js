/**
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints =  (questions) => { 
    const n = questions.length
    if (!n) return 0;

    const dp = Array(n + 1).fill(0);

    for(let i = n -1; i >= 0; i--){
        const [x, y] = questions[i];
        dp[i] = Math.max(dp[i + 1], (dp[i + y + 1] || 0) + x);
    }
    
    return dp[0]

};