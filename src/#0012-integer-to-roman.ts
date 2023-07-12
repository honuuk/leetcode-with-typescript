/**
 * 문제 : https://leetcode.com/problems/integer-to-roman/
 */

function intToRoman(num: number): string {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let answer = "";
  let currentNum = num;

  while (currentNum > 0) {
    const maxValue: number =
      values.find((value) => currentNum >= value) || 4000;
    const index = values.findIndex((value) => value === maxValue);
    const symbol = symbols[index];

    answer = answer + symbol;
    currentNum = currentNum - maxValue;
  }

  return answer;
}

console.log(intToRoman(1994));
