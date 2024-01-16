function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero!";
  }
}

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(8, 4));
console.log("Multiplication:", multiply(2, 6));
console.log("Division:", divide(10, 2));
