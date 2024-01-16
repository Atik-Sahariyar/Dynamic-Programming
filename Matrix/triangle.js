
const minimumTotal = (triangle) => {
    const dpTriangle = [...triangle];

    for (let i = dpTriangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < dpTriangle[i].length; j++) {
            dpTriangle[i][j] += Math.min(dpTriangle[i + 1][j], dpTriangle[i + 1][j + 1]);
        }
    }

    return dpTriangle[0][0];
};

