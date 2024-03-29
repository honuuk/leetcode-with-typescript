/**
 * 문제 : https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 난이도 : Hard
 */

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const mergedNums: number[] = [];

  while (nums1.length || nums2.length) {
    const n1 = nums1[0] === undefined ? Infinity : nums1[0];
    const n2 = nums2[0] === undefined ? Infinity : nums2[0];

    if (n1 > n2) {
      mergedNums.push(n2);
      nums2.shift();
    } else {
      mergedNums.push(n1);
      nums1.shift();
    }
  }

  const medianIndex: number = Math.floor(mergedNums.length / 2);

  return mergedNums.length % 2
    ? mergedNums[medianIndex]
    : (mergedNums[medianIndex] + mergedNums[medianIndex - 1]) / 2;
}

console.log(findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
