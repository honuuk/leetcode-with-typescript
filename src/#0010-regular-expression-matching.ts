/**
 * 문제 : https://leetcode.com/problems/regular-expression-matching/
 * 난이도 : Hard
 */

export function isMatch(s: string, p: string): boolean {
  const memo: boolean[][] = [];
  return dp(0, 0);

  function compute(i: number, j: number): boolean {
    const isFirstMatch = s[i] !== undefined && [s[i], "."].includes(p[j]);
    const isStar = p[j + 1] === "*";

    if (p[j] === undefined) return s[i] === undefined;

    if (isStar) return (isFirstMatch && dp(i + 1, j)) || dp(i, j + 2);

    return isFirstMatch && dp(i + 1, j + 1);
  }

  function dp(i: number, j: number): boolean {
    memo[i] = memo[i] || [];
    if (memo[i][j] !== undefined) return memo[i][j];

    memo[i][j] = compute(i, j);

    return memo[i][j];
  }
}

console.log(isMatch("bbbba", ".*a*a"));
