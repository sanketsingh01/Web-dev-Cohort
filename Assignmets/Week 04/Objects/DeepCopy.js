// You just need to implement the deepClone function
function deepClone(obj) {
  // Return a deep copy of obj
  const copy_data = JSON.stringify(obj);
  const copied_obj = JSON.parse(copy_data);
  return copied_obj;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { obj } = JSON.parse(input);
  const result = deepClone(obj);
  process.stdout.write(JSON.stringify(result));
});
