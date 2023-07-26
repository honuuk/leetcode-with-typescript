/**
 * 문제 : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * 난이도 : Easy
 */

function removeDuplicates(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

const nums = [1, 1, 2];
removeDuplicates(nums);
console.log(nums);
