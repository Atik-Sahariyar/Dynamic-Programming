const fib = (n) => {
    if (n <= 1) {
        return n;
    }
    
    let prev1 = 1, prev2 = 0;
    for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
};
