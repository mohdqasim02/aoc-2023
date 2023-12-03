const { readFileSync } = require("fs");

const main = () => {
  const input = readFileSync("./input.txt", "utf-8").split("\n");
  const digits = input
    .map(line => [...line.match(/(\d)/g)])
    .map(digits => parseInt(digits[0] + digits.at(-1)));

  const sum = digits.reduce((sum, a) => sum + a);

  console.log(sum);
};

main();
