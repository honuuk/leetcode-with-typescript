/**
 * 문제 : https://leetcode.com/problems/roman-to-integer/
 */

function romanToInt(s: string): number {
  const valueMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const current = valueMap[s[i]];
    const next = valueMap[s[i + 1]];

    if (current < next) answer -= current;
    else answer += current;
  }

  return answer;
}

console.log(romanToInt("MCMXCIV"));
