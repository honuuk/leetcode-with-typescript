/**
 * 문제 : https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

type IndexMap = {
  [key: string]: number;
};

export function lengthOfLongestSubstring(s: string): number {
  const indexMap: IndexMap = {};

  let leftIndex: number = 0;

  return s
    .split("")
    .reduce((answer: number, char: string, rightIndex: number) => {
      leftIndex = indexMap[char] >= leftIndex ? indexMap[char] + 1 : leftIndex;
      indexMap[char] = rightIndex;
      return Math.max(answer, rightIndex - leftIndex + 1);
    }, 0);
}

console.log(lengthOfLongestSubstring("pwwkew"));
