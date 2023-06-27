/**
 * Given the r of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const searchTree = (treeNode, index, arr) => {
        if(!treeNode) return arr;
        if(!arr[index]) arr.push([]);
        arr[index].push(treeNode.val);
        searchTree(treeNode.left, index + 1, arr);
        searchTree(treeNode.right, index + 1, arr);
    }
    searchTree(root, 0, arr = []);
    return arr;
};

// runtime 81 ms
// memory 45.5 MB