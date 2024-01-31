/**
 * @param {string} s
 * @return {number}
 */
const numDecodings =  (s) => {
    const n = s.length;
    if (n === 0 || s[0] === '0')  return 0;

    const arr = Array(n + 1).fill(0);
    arr[0] = 1;

    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== '0') {
            arr[i] += arr[i - 1];
        }

        if (i > 1 && s[i - 2] !== '0' && parseInt(s.substring(i - 2, i)) <= 26) {
            arr[i] += arr[i - 2];
        }
    }

    return arr[n];
};