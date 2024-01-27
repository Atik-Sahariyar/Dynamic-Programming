/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = (n) => {
    if(n === 0) return [];

    const geberate_trees = (start, end) => {
        if(start > end ) return [null];

        const trees = [];
        for(let i = start; i <= end; i++){
            const left_trees = geberate_trees(start, i - 1);
            const right_trees = geberate_trees( i + 1, end);

            for(const l of left_trees){
                for(const r of right_trees){
                    const current_tree = new TreeNode(i);
                    current_tree.left = l;
                    current_tree.right = r;
                    trees.push(current_tree);
                }
            }
        } 
        return trees
    }

    return geberate_trees(1, n)
};