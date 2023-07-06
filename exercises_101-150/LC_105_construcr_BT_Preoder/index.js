/**
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: preorder = [-1], inorder = [-1]
Output: [-1]
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const createTree = (left = 0, right = preorder.length - 1) => {
        if(left > right) return null;
        let node = preorder.shift();
        let treeNode = new TreeNode(node);
        let middle = inorder.indexOf(node);
        treeNode.left = createTree(left, middle - 1);
        treeNode.right = createTree(middle + 1, right);
        return treeNode;
    }
    return createTree();
};

// runtime 75 ms
// memory 44.7 MB