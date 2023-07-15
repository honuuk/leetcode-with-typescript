/**
 * 문제 : https://leetcode.com/problems/reverse-nodes-in-k-group/
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  const dummyNode = new ListNode();
  dummyNode.next = head;

  let currentNode = head;
  let lastNode: ListNode = dummyNode;

  const stack: ListNode[] = [];

  while (currentNode) {
    while (currentNode && stack.length < k) {
      stack.push(currentNode);
      currentNode = currentNode.next;
    }

    if (stack.length < k) break;

    while (stack.length) {
      lastNode.next = stack.pop()!;
      lastNode = lastNode.next;
    }
    lastNode.next = currentNode;
  }

  return dummyNode.next;
}
