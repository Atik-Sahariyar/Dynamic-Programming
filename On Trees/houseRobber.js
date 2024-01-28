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
const rob = (root) => {
    const helper = (node) => {
        if(!node) return [0,0];
        const [lr, ln] = helper(node.left);
        const [rr, rn] = helper(node.right);
        return [node.val + ln + rn, Math.max(lr + rr, ln + rn, lr + rn, ln + rr)]
    }

    const result = Math.max(...helper(root));
    return result;

};