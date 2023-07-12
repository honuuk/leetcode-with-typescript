/**
 * 문제 : https://leetcode.com/problems/4sum/
 */

export function fourSum(_nums: number[], target: number): number[][] {
  const answer: number[][] = [];

  const nums: number[] = _nums.sort((a, b) => a - b);
  if (nums.length < 4) return answer;

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;

      let lo: number = j + 1;
      let hi: number = nums.length - 1;

      while (lo < hi) {
        const sum: number = nums[i] + nums[j] + nums[lo] + nums[hi];

        if (sum === target) {
          answer.push([nums[i], nums[j], nums[lo], nums[hi]]);
          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
          while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
          lo++;
          hi--;
          continue;
        }

        if (sum < target) {
          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
          lo++;
          continue;
        }

        while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
        hi--;
      }
    }
  }

  return answer;
}

console.log(fourSum([0, 0, 0, 0], 0));
