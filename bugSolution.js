function foo(a, b) {
  // Type checking before performing addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    //Handle invalid input, here I'm converting them to numbers or return an error
    a = parseFloat(a) || 0; // Handle cases where parseFloat fails to parse
    b = parseFloat(b) || 0; // Handle cases where parseFloat fails to parse
    return a + b; 
  }
}
console.log(foo(2, 3)); // 5
console.log(foo(2, "3")); // 5
console.log(foo("2", 3)); // 5
console.log(foo("2", "3")); // 5
console.log(foo("a", "b")); // 0
console.log(foo(2, "a")); // 2
console.log(foo("a",2)); // 2