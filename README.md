# Unexpected String Concatenation in JavaScript

This example demonstrates a common error in JavaScript where loose typing leads to unexpected string concatenation instead of mathematical addition when numbers and strings are mixed in an arithmetic operation.

## Bug
The `foo` function intends to add two numbers.  However, due to JavaScript's dynamic typing, if either input is a string, the `+` operator performs string concatenation.

## Solution
The solution involves explicit type checking or conversion to ensure both inputs are numbers before performing addition.
