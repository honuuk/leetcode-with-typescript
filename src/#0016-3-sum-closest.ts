/**
 * 문제 : https://leetcode.com/problems/3sum-closest/
 * 난이도 : Medium
 */

export function threeSumClosest(_nums: number[], target: number): number {
  const nums: number[] = _nums.sort((a, b) => a - b);
  let answer: number = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let lo: number = i + 1;
    let hi: number = nums.length - 1;

    while (lo < hi) {
      const sum = nums[i] + nums[lo] + nums[hi];
      const currentDiff = Math.abs(target - answer);
      const newDiff = Math.abs(target - sum);

      if (sum > target) hi--;
      else lo++;

      if (currentDiff > newDiff) answer = sum;
    }
  }

  return answer;
}

console.log(threeSumClosest([0, 2, 1, -3], 1));
