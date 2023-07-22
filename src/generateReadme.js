const fs = require("fs");
const path = require("path");

const getTitle = (filename) => {
  const [number, ...names] = filename.split("-");
  return names
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(" ");
};

const getDifficultyCount = (contentsData) => {
  return contentsData.reduce((acc, data) => {
    if (acc[data.difficulty]) acc[data.difficulty] += 1;
    else acc[data.difficulty] = 1;
    return acc;
  }, {});
};

const formatContents = (data, index) => {
  return `[${index + 1}. ${data.title}](${data.url}) | [Code](${
    data.githubUrl
  }) | ${data.difficulty}`;
};

(async () => {
  const problems = fs
    .readdirSync(__dirname)
    .filter((filename) => filename !== path.basename(__filename));

  const contentsData = problems.map((filename) => {
    const file = fs.readFileSync(__dirname + "/" + filename).toString();
    const [url] = file.match(/https:\/\/.*/g);
    const [difficulty] = file.match(/(Hard|Medium|Easy)/g);

    return {
      title: getTitle(filename),
      url,
      githubUrl: `https://github.com/jewook3617/leetcode-with-typescript/blob/master/src/${filename.replace(
        "#",
        "%23"
      )}`,
      difficulty,
    };
  });

  const difficultyCount = getDifficultyCount(contentsData);

  const template = `# Typescript로 [Leetcode](https://leetcode.com/problemset/all/) 문제풀기
  
  ## Total: ${problems.length}
  
  | Easy | Medium | Hard |
  | :--: | :----: | :--: |
  |  ${difficultyCount["Easy"]}   |   ${difficultyCount["Medium"]}   |  ${
    difficultyCount["Hard"]
  }   |
  
  | 문제                                                                                                                               |                                                                   코드                                                                   | 난이도 |
  | ---------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------: | :----: |
  ${contentsData.map(formatContents).join("\n")}
  `;

  fs.rmSync("README.md");
  fs.writeFileSync("README.md", template);
  console.log("NEW README.MD FILE CREATED");
})();
