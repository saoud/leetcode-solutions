// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:
// Input: lists = []
// Output: []
// Example 3:
// Input: lists = [[]]
// Output: []
// Constraints:

//     k == lists.length
//     0 <= k <= 104
//     0 <= lists[i].length <= 500
//     -104 <= lists[i][j] <= 104
//     lists[i] is sorted in ascending order.
//     The sum of lists[i].length will not exceed 104.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  // edge case
  if (lists.length == 0) return null;
  
  // using dummy head to avoid writing additional code for edge cases (e.g. list = null).
  // p is the pointer of dummy, p1 is the pointer of list1, p2 is the pointer of list2
  let dummy = new ListNode(0);
  let p = dummy;
  
  // MinPriorityQueue which considers an element with smaller priority number as higher in priority.
  let pq = new MinPriorityQueue({compare: (x, y) => x.val - y.val});
  
  // get all head of lists and add them into pq to sort them.
  for (let head of lists){
      if (head) pq.enqueue(head);
  }
  
  while (!pq.isEmpty()){
      // get the smallest node and add it to the result list
      let node = pq.dequeue();
      p.next = node;
      
      // add nodes of lists to PriorityQueu to compare them.
      if (node.next) pq.enqueue(node.next);
      
      // move the pointer
      p = p.next;
  }
  
  // if we return dummy, we will get a linked list started with 0 because we initiate this list with 0
  return dummy.next
};