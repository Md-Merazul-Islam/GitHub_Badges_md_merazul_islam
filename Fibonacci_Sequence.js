function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log("Fibonacci Sequence (first 10 numbers):");
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
