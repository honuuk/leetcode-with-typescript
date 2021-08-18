/**
 * 문제 : https://leetcode.com/problems/generate-parentheses/
 */

function generateParenthesis(n: number): string[] {
  if (n === 0) return [""];

  const answer: string[] = [];

  for (let c = 0; c < n; c++) {
    for (const left of generateParenthesis(c)) {
      for (const right of generateParenthesis(n - 1 - c)) {
        answer.push(`(${left})${right}`);
      }
    }
  }

  return answer;
}

console.log(generateParenthesis(3));
