/**
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references. A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
	const result = [];
    const path = [];
    if(!root) return result;
    const helper = (treeNode, data, sum) => {
        if(treeNode == null) return;
        data.push(treeNode.val);
        if (treeNode.left == null && treeNode.right == null) {
            if(sum + treeNode.val == targetSum) result.push([...data]);
        } else {
            helper(treeNode.left, data, sum + treeNode.val);
            helper(treeNode.right, data, sum + treeNode.val);
        }
       data.pop();
    }    
    helper(root, path, 0);
    return result;
}