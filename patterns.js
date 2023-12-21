let arr = [4, 3, 2, 1, 5];

for (let i = 0; i < arr.length; i++) {
  let output = "";
  for (let j = 0; j < arr[i]; j++) {
    output += arr[i] + (j < arr[i] - 1 ? "*" : "");
  }
  console.log(output);
}


console.log('hi');