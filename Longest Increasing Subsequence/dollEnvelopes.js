/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = (envelopes) => {
    if(envelopes.length === 0) return 0;

    envelopes.sort((a, b) => {
        if(a[0] === b[0]){
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });

    const dp = [envelopes[0][1]];
    for(let i = 1; i < envelopes.length; i++){
        const height = envelopes[i][1];
        if(height > dp[dp.length - 1]){
            dp.push(height);
        } else {
            let left = 0;
            let right = dp.length - 1;
            while(left < right) {
                const mid = Math.floor((left + right) / 2);
                if(dp[mid] < height){
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            dp[left] = height;
        }
    }
    return dp.length;
};