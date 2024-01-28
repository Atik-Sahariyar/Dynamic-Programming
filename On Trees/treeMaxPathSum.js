/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = (root) => {
    const result = { val: -Infinity};
    
    const dfs = (rt, ans) => {
     if(!rt) return 0;

     const left = dfs(rt.left, ans);
     const right = dfs(rt.right, ans);

     const maxVal = Math.max(rt.val, rt.val + left, rt.val + right);
     ans.val = Math.max(ans.val, maxVal, rt.val + left + right);

     return maxVal;
    }

    dfs(root, result);

    return result.val
};