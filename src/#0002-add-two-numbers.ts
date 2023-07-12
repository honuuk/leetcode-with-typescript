/**
 * 문제 : https://leetcode.com/problems/add-two-numbers/
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null {
  if (!l1 && !l2 && !carry) return null;

  const sum = (l1?.val || 0) + (l2?.val || 0) + carry;

  return new ListNode(
    sum % 10,
    addTwoNumbers(l1?.next || null, l2?.next || null, Math.floor(sum / 10))
  );
}

const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(list1, list2));
