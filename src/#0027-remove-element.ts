/**
 * 문제 : https://leetcode.com/problems/remove-element/
 * 난이도 : Easy
 */

export function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

const nums = [1, 7, 1, 8, 3, 1, 1, 19, 1, 1, 2, 2, 11, 4123, 13, 45];
removeElement(nums, 1);
console.log(nums);
