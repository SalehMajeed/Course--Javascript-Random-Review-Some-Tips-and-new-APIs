const test_str = "hi. I have 5 cats and I have 2 dogs.";
const re = /I have (\d+) (\w+)/g;

let reges_result;

console.log(re.lastIndex);

while ((reges_result = re.exec(test_str)) !== null) {
  console.log(reges_result);
  console.log("Last index:" + re.lastIndex);
}
