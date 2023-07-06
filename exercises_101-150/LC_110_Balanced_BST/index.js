/**
 * Given a binary tree, determine if it is height-balanced.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true
 */

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const checkDepth = (treeNode) => {
        if(treeNode === null ) return 0;
        return 1 + Math.max(checkDepth(treeNode.left), checkDepth(treeNode.right));
    }
    if(root === null) return true;
    let depthL = checkDepth(root.left);
    let depthR = checkDepth(root.right);
    return Math.abs(depthL - depthR) <= 1 && isBalanced(root.left) == true && isBalanced(root.right) == true;;
};

// runtime 85 ms
// memory 48.1 MB