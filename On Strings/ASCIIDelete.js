

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumDeleteSum = (s1, s2) => {
    const m = s1.length;
    const n = s2.length;
    const dp = Array(n + 1).fill(0);

    for (let j = 1; j <= n; j++) {
        dp[j] = dp[j - 1] + s2.charCodeAt(j - 1);
    }

    for (let i = 1; i <= m; i++) {
        const newDp = Array(n + 1).fill(0);
        newDp[0] = dp[0] + s1.charCodeAt(i - 1);

        for (let j = 1; j <= n; j++) {
            if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
                newDp[j] = dp[j - 1];
            } else {
                newDp[j] = Math.min(newDp[j - 1] + s2.charCodeAt(j - 1), dp[j] + s1.charCodeAt(i - 1));
            }
        }

        dp[0] = newDp[0];
        for (let j = 1; j <= n; j++) {
            dp[j] = newDp[j];
        }
    }

    return dp[n];
};

// Test Case 1
console.log(minimumDeleteSum("sea", "eat")); // Output: 231

// Test Case 2
console.log(minimumDeleteSum("delete", "leet")); // Output: 403
