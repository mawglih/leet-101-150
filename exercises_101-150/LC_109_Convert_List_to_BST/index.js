/**
 * Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced  binary search tree.

Example 1:
Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

Example 2:
Input: head = []
Output: []
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let temp = [];
    while(head.next) {
        temp.push(head.val);
        head = head.next;
    }
    const arrayToBSTRec = (left, right, arr) => {
        if(left >= right) return null;
        const mid = ~~((left + right) / 2);
        const node = new TreeNode(arr[mid], arrayToBSTRec(left, mid, arr), arrayToBSTRec(mid + 1, right, arr));
        return node;
    }
    return arrayToBSTRec(0, temp.length, temp);
};

//runtime 80 ms 
// memory 48 mb

/**
 * second solution using slow and fast pointers
 */

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST2 = function (head) {
    if (!head) return null;
  
    let previous = head;
    let slow = head;
    let fast = head.next;
  
    while (fast) {
      previous = slow;
      slow = slow.next;
      fast = fast.next && fast.next.next;
    }
  
    previous.next = null;
    return new TreeNode(
      slow.val,
      sortedListToBST2(head === slow ? null : head),
      sortedListToBST2(slow.next)
    );
  };