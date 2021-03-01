"use strict";
/**
 * 문제 : https://leetcode.com/problems/two-sum/
 */
function twoSum(nums, target) {
    const indexMap = {};
    for (const [index, num] of nums.entries()) {
        const pair = target - num;
        if (pair in indexMap)
            return [index, indexMap[pair]];
        indexMap[num] = index;
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
