// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
  // Return the value from the nested object based on keyPath
  const KeyArray = keyPath.split(".");
  let curr = obj;

  for (const key of KeyArray) {
    if (curr && typeof curr === "object" && curr.hasOwnProperty(key)) {
      curr = curr[key];
    } else {
      return "Key not found";
    }
  }

  return curr;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { obj, keyPath } = JSON.parse(input);
  const result = getNestedValue(obj, keyPath);
  process.stdout.write(JSON.stringify(result));
});
