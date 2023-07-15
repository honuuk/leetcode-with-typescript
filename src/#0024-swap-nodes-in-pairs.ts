/**
 * 문제 : https://leetcode.com/problems/swap-nodes-in-pairs/
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  const restNodesHead = head.next.next;
  const newHead = head.next;
  newHead.next = head;
  newHead.next.next = swapPairs(restNodesHead);
  return newHead;
}
