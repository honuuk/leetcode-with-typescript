function arrayCombination(a: string[], b: string[]): string[] {
  return b.flatMap((element) => a.map((e) => e + element));
}

export function letterCombinations(_digits: string): string[] {
  const digitLetterMap: { [key: string]: string[] } = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let answer: string[] = digitLetterMap[_digits[0]] || [];

  let digits: string = _digits.slice(1);

  while (digits.length > 0) {
    answer = arrayCombination(answer, digitLetterMap[digits[0]]);
    digits = digits.slice(1);
  }

  return answer;
}

console.log(letterCombinations("23"));
