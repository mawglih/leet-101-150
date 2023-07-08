/**
 * Given the root of a binary tree, flatten the tree into a "linked list": The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null. The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 
Example 1:
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [0]
Output: [0]
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    function preorder(root){
        if(!root) return [];
        var res = [];
        res.push(root);
        res.push(...preorder(root.left));
        res.push(...preorder(root.right));
        return res;
    }
    var res1 = preorder(root);
    for(let i = 0; i < res1.length; i++){
        if(i + 1 === res1.length){
            res1[i].left = null;
            res1[i].right=null;
            break;
        }
        res1[i].left = null;
        res1[i].right = res1[i+1];
    }
};

// runtime 79 ms
// memory 44.6 MB