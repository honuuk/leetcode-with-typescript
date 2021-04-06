/**
 * 문제 : https://leetcode.com/problems/longest-palindromic-substring/
 */

function longestPalindromeLength(s: string, l: number, r: number) {
  let left = l;
  let right = r;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}

function longestPalindrome(s: string): string {
  let start = 0;
  let end = 1;

  for (let i = 0; i < s.length; i++) {
    const len1 = longestPalindromeLength(s, i, i);
    const len2 = longestPalindromeLength(s, i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = len % 2 ? i - Math.floor(len / 2) : i - len / 2 + 1;
      end = start + len;
    }
  }
  return s.slice(start, end);
}

console.log(longestPalindrome("cbbd"));
