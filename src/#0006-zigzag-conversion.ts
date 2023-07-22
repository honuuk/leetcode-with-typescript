/**
 * 문제 : https://leetcode.com/problems/zigzag-conversion/
 * 난이도 : Medium
 */

export function convert(s: string, numRows: number): string {
  const arr: string[] = Array(Math.min(numRows, s.length)).fill("");

  let currentRow = 0;
  let isGoingDown = true;

  for (const char of s) {
    if (numRows === 1 || numRows > s.length) return s;

    arr[currentRow] = arr[currentRow].concat(char);
    currentRow = isGoingDown ? currentRow + 1 : currentRow - 1;
    if (currentRow === 0 || currentRow === numRows - 1)
      isGoingDown = !isGoingDown;
  }

  return arr.reduce((acc, str) => acc + str, "");
}

console.log(convert("PAYPALISHIRING", 3));
