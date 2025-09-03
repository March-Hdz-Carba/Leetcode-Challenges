/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */

//This solution works only with arrays, and not with linked lists

const addTwoNumbers = (l1, l2) => {
  const respL1 = l1.reverse().join('');
  const respL2 = l2.reverse().join('');
  let sum = Number(respL1) + Number(respL2);

  let arr = [];
  while (sum > 0) {
      arr.unshift(sum % 10);
      sum = Math.floor(sum / 10);
  }

  return arr.reverse();
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));
