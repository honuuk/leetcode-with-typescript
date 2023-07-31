/**
 * 문제 : https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * 난이도 : Easy
 */

export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[0]) continue;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (j === needle.length - 1) return i;
    }
  }

  return -1;
}
