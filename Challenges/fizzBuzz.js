var output = [];

function fizzBuzz() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("fizzbuzz");
    } else if (i % 5 === 0) {
      output.push("buzz");
    } else if (i % 3 === 0) {
      output.push("fizz");
    } else {
      output.push(i);
    }
  }
  console.log(output);
}

fizzBuzz();
