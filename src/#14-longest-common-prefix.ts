/**
 * 문제 : https://leetcode.com/problems/longest-common-prefix/
 */

function LCP(left: string, right: string) {
  let prefix = left;

  while (right.indexOf(prefix) !== 0) {
    prefix = prefix.slice(0, prefix.length - 1);
    if (prefix === "") break;
  }

  return prefix;
}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let answer = strs[0];

  for (const str of strs) {
    answer = LCP(answer, str);
    if (answer === "") break;
  }

  return answer;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
