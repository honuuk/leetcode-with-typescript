function twoSum(nums: number[], target: number): number[] {
  const indexMap: any = {};
  for (const [index, num] of nums.entries()) {
    const pair = target - num;
    if (pair in indexMap) return [index, indexMap[pair]];
    indexMap[num] = index;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
