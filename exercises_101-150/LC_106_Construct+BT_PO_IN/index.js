/**
 * Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: inorder = [-1], postorder = [-1]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const createTree = (left, right) => {
        if(left > right) return null;
        let node = postorder.pop();
        let treeNode = new TreeNode(node);
        let middle = inorder.indexOf(node);
        treeNode.right = createTree(middle + 1, right);
        treeNode.left = createTree(left, middle - 1);
        return treeNode;
    }
    return createTree(0, postorder.length - 1);
};

// runtimr 69 ms
// memory 45 MB