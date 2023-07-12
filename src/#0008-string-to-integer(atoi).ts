/**
 * 문제 : https://leetcode.com/problems/string-to-integer-atoi/
 */

export function myAtoi(s: string): number {
  const inputString = s.trim();
  let sign = 0;

  let outputString = "";

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    const asciiValue = inputString.charCodeAt(i);

    if (i === 0 && ["+", "-"].includes(char)) {
      sign = char === "+" ? 1 : -1;
      continue;
    }

    if (asciiValue < 48 || asciiValue > 57) break;
    outputString += char;
  }

  outputString = outputString ? outputString : "0";

  return Math.min(
    Math.max((sign || 1) * parseInt(outputString, 10), -1 * 2 ** 31),
    2 ** 31 - 1
  );
}

// console.log(myAtoi("00000-42a1234"));
