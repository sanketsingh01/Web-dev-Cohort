// You just need to implement the mergeObjects function
function mergeObjects(obj1, obj2) {
  // Merge obj1 and obj2 into a single object
  const merged = { ...obj1, ...obj2 };
  return merged;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { obj1, obj2 } = JSON.parse(input);
  const result = mergeObjects(obj1, obj2);
  process.stdout.write(JSON.stringify(result));
});
