/**
 * 문제 : https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 * 난이도 : Hard
 */

function checkConcatenated(s: string, words: string[]): boolean {
  const wordLength = words[0].length;
  if (s.length % wordLength) return false;

  const wordCounts: Record<string, number> = words.reduce((acc, word) => {
    acc[word] = acc[word] ? acc[word] + 1 : 1;
    return acc;
  }, {} as Record<string, number>);

  for (let i = 0; i < s.length; i += wordLength) {
    const substr = s.slice(i, i + wordLength);
    if (!wordCounts[substr]) return false;
    wordCounts[substr]--;
  }
  return true;
}

function findSubstring(s: string, words: string[]): number[] {
  const answer: number[] = [];
  const substrLength = words[0].length * words.length;

  for (let i = 0; i < s.length - substrLength + 1; i++) {
    if (checkConcatenated(s.slice(i, i + substrLength), words)) answer.push(i);
  }

  return answer;
}

console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
);
