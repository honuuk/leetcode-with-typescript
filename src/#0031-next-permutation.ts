/**
 * 문제 : https://leetcode.com/problems/next-permutation/
 * 난이도 : Medium
 */

/**
 Do not return anything, modify nums in-place instead.
 */

function next(nums: number[], nextDigit: number) {
  if (nextDigit === -1) return nums.sort((a, b) => a - b);

  const candidates = nums
    .slice(nextDigit + 1)
    .filter((n) => n > nums[nextDigit]);

  if (!candidates.length) return next(nums, nextDigit - 1);

  const nextDigitNum = Math.min(...candidates);
  const rest = nums.slice(nextDigit);

  rest.splice(rest.indexOf(nextDigitNum), 1);
  nums.splice(nextDigit);

  return nums.push(...[nextDigitNum].concat(rest.sort((a, b) => a - b)));
}

function swapLastTwo(nums: number[]) {
  const temp = nums[nums.length - 1];
  nums[nums.length - 1] = nums[nums.length - 2];
  nums[nums.length - 2] = temp;
}

function nextPermutation(nums: number[]): void {
  if (nums.length === 1) return;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return swapLastTwo(nums);
  next(nums, nums.length - 3);
}

const nums = [
  11, 12, 0, 27, 3, 11, 21, 9, 0, 15, 26, 27, 17, 24, 0, 16, 4, 17, 14, 8, 15,
  8, 2, 16, 10, 6, 6, 24, 16, 2, 18, 19, 6, 10, 17, 10, 21, 0, 11, 13, 7, 7, 2,
  16, 24, 25, 2, 20, 12, 9, 20, 19,
];
nextPermutation(nums);
