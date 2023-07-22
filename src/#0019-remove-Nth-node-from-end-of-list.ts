/**
 * 문제 : https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * 난이도 : Medium
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (!head) return head;

  let length: number = 0;
  let current: ListNode | null = head;

  while (current) {
    length++;
    current = current.next;
  }

  let targetFromStart = length - n;

  if (targetFromStart === 0) return head.next;

  let prevNode: ListNode | null = head;
  for (let i = 0; i < targetFromStart - 1; i++) {
    prevNode = prevNode ? prevNode.next : null;
  }

  let nextNode: ListNode | null = head;
  for (let i = 0; i < targetFromStart + 1; i++) {
    nextNode = nextNode ? nextNode.next : null;
  }

  if (prevNode) {
    prevNode.next = nextNode;
  }

  return head;
}
