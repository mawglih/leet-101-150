/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced  binary search tree.

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const arrayToBSTRec = (left, right, arr) => {
        if(left >= right) return null;
        const mid = ~~((left + right) / 2);
        const node = new TreeNode(arr[mid], arrayToBSTRec(left, mid, arr), arrayToBSTRec(mid + 1, right, arr));
        return node;
    }
    return arrayToBSTRec(0, nums.length, nums);
};

//runtime 68 ms
// memory 44.5 MB