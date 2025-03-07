// You just need to implement the cleanObject function
function cleanObject(obj) {
  // Remove all properties with null or undefined values
  Object.entries(obj).map((arr) => {
    if (arr[1] === null || arr[1] === undefined) {
      delete obj[arr[0]];
    }
  });
  return obj;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { obj } = JSON.parse(input);
  const result = cleanObject(obj);
  process.stdout.write(JSON.stringify(result));
});
