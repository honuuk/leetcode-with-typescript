/**
 * 문제 : https://leetcode.com/problems/reverse-integer/
 * 난이도 : Medium
 */

function reverseString(str: string): string {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

export function reverse(x: number): number {
  const reverseStringX = reverseString(Math.abs(x).toString());
  const reverseX = parseInt(x < 0 ? `-${reverseStringX}` : reverseStringX);

  return reverseX < -1 * Math.pow(2, 31) || reverseX >= Math.pow(2, 31)
    ? 0
    : reverseX;
}

// console.log(reverse(123));
