/**
 * 문제 : https://leetcode.com/problems/merge-k-sorted-lists/
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function listToArray(list: ListNode | null): number[] {
  const arr: number[] = [];

  if (!list) return arr;
  let current: ListNode | null = list;

  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}

function arrayToList(arr: number[]): ListNode | null {
  const list = new ListNode();
  let current = list;

  arr.forEach((val) => {
    current.next = new ListNode(val);
    current = current.next;
  });

  return list.next;
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const arr: number[] = lists.flatMap(listToArray);
  arr.sort();

  return arrayToList(arr.sort((a, b) => a - b));
}
