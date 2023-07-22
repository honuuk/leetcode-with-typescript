/**
 * 문제 : https://leetcode.com/problems/3sum/
 * 난이도 : Medium
 */

export function threeSum(_nums: number[]): number[][] {
  const answer: number[][] = [];
  const nums = _nums.sort((a, b) => a - b);
  if (nums.length < 3) return answer;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return answer;
    if (nums[i] === nums[i - 1]) continue;

    let lo = i + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
      const sum = nums[i] + nums[lo] + nums[hi];

      if (sum === 0) {
        answer.push([nums[i], nums[lo], nums[hi]]);
        while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
        while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
        lo++;
        hi--;
        continue;
      }

      if (sum > 0) {
        hi--;
        continue;
      }

      lo++;
    }
  }

  return answer;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
