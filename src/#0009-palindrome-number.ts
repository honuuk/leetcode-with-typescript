/**
 * 문제 : https://leetcode.com/problems/palindrome-number/
 */

function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const stringX = x.toString();
  const length = stringX.length;

  for (let i = 0; i < length / 2; i++) {
    if (stringX[i] !== stringX[length - 1 - i]) return false;
  }
  return true;
}

// console.log(isPalindrome(1231));
