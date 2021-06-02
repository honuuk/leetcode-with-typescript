/**
 * 문제 : https://leetcode.com/problems/longest-common-prefix/
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let answer = strs[0];

  for (const str of strs) {
    while (str.indexOf(answer) !== 0) {
      answer = answer.slice(0, answer.length - 1);
    }

    if (answer === "") break;
  }

  return answer;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
