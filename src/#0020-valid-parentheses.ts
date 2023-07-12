/**
 * 문제 : https://leetcode.com/problems/valid-parentheses/
 */

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    if (char === "(") stack.push(")");
    else if (char === "{") stack.push("}");
    else if (char === "[") stack.push("]");
    else if (stack.length === 0 || stack.pop() !== char) return false;
  }

  return stack.length === 0;
}

// console.log(isValid("([)]"));
