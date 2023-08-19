/**
 * 문제 : https://leetcode.com/problems/divide-two-integers/
 * 난이도 : Medium
 */

function divide(dividend: number, divisor: number): number {
  const sign = dividend > 0 === divisor > 0 ? 1 : -1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  if (dividend === 0) return 0;
  if (dividend === divisor) return sign;

  let answer = 0;
  while (dividend >= divisor) {
    for (let i = 1; i < 32; i++) {
      if (dividend >> i < divisor) {
        answer += 1 << (i - 1);
        dividend -= divisor << (i - 1);
        break;
      }
    }
  }

  answer *= sign;

  if (answer > 2147483647) return 2147483647;
  if (answer < -2147483648) return -2147483648;
  return answer;
}

console.log(divide(-2147483648, 4));
