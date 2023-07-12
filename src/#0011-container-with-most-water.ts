/**
 * 문제 : https://leetcode.com/problems/container-with-most-water/
 */

export function maxArea(height: number[]): number {
  let answer = 0,
    l = 0,
    r = height.length - 1;

  while (l < r) {
    answer = Math.max(answer, (r - l) * Math.min(height[l], height[r]));

    if (height[l] < height[r]) l++;
    else r--;
  }

  return answer;
}

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
