"use strict";
/**
 * 문제 : https://leetcode.com/problems/add-two-numbers/
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function addTwoNumbers(l1, l2, carry = 0) {
    if (!l1 && !l2 && !carry)
        return null;
    const sum = ((l1 === null || l1 === void 0 ? void 0 : l1.val) || 0) + ((l2 === null || l2 === void 0 ? void 0 : l2.val) || 0) + carry;
    return new ListNode(sum % 10, addTwoNumbers((l1 === null || l1 === void 0 ? void 0 : l1.next) || null, (l2 === null || l2 === void 0 ? void 0 : l2.next) || null, Math.floor(sum / 10)));
}
const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(list1, list2));
