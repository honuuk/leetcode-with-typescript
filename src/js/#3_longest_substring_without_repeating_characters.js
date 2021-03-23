"use strict";
/**
 * 문제 : https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
function lengthOfLongestSubstring(s) {
    const indexMap = {};
    let leftIndex = 0;
    return s
        .split("")
        .reduce((answer, char, rightIndex) => {
        leftIndex = indexMap[char] >= leftIndex ? indexMap[char] + 1 : leftIndex;
        indexMap[char] = rightIndex;
        return Math.max(answer, rightIndex - leftIndex + 1);
    }, 0);
}
console.log(lengthOfLongestSubstring("pwwkew"));
