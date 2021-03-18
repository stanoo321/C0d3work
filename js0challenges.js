/*Sum of 2 Numbers

Write a function that takes in 2 numbers and returns their sum.

Here's how another developer might use your function:

solution(5,9) // Should return 14
solution(4,1) // Should return 5*/

const solution = (a, b) => {
  return a + b;
};
module.exports = {
  solution,
};

/*Write a function that takes in 3 numbers and returns their sum.

Here's how another developer might use your function:

solution(5,9,2) // Should return 16
solution(4,1,9) // Should return 14*/

const solution = (a, b, c) => {
  return a + b + c;
};
module.exports = {
  solution,
};

/*Write a function that takes in a number and returns true if that number is greater than 5. Otherwise, return false.

  Here's how another developer might use your function:
  
  solution(9) // Should return true
  solution(4) // Should return false*/

const solution = (num) => {
  return num > 5;
};

/*Biggest Num out of 2

Write a function that takes in 2 numbers and return the largest out of them.

Here's how another developer might use your function:

solution(5,9) // Should return 9
solution(4,1) // Should return 4*/

const solution = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

/*Biggest Num Out of 3

Write a function that takes in 3 numbers and return the largest out of them.

Here's how another developer might use your function:

solution(5,9,14) // Should return 14
solution(4,5,1) // Should return 5*/

const solution = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

module.exports = {
  solution,
};

/*Is First Num Bigger

Write a function that takes in 2 numbers and returns true if the first number is greater than the second, false otherwise.

Here's how another developer might use your function:

solution(5,9) // Should return false
solution(4,1) // Should return true*/

const solution = (a, b) => {
  return a > b;
};
module.exports = {
  solution,
};

/*Is Sum > 10

Write a function that takes in 2 numbers and returns true if their sum is greater than 10.

Here's how another developer might use your function:

solution(5,9) // Should return true
solution(4,1) // Should return false*/

const solution = (a, b) => {
  return a + b > 10;
};
module.exports = {
  solution,
};

/*Takes in 2 numbers, return a function that returns the sum when the function is called

Example:

const a = solution(5,6) // a is a function, and a() will return 11*/

const solution = (a, b) => {
  return () => {
    return a + b;
  };
};

/*Functional 3 Sum

Write a function that takes in 2 numbers, return a function that takes in a number that returns the sum of all 3 numbers when called. Example:

const a = solution(1,2); // a is a function
// a(1) returns 4 because 1+2+1
// a(5) returns 8 because 1 + 2 + 5 
// a(2) returns 5 because 1 + 2 + 2*/

const solution = () => {
  return (c) => {
    return a + b + c;
  };
};

/*Functional Sums

Write a function that takes in 2 functions and returns the sum of the result of the 2 functions Example:

const a = () => {  return 5; }
const b = () => {  return 6; }
const c = solution(a, b) // c should be 11 because a() + b()*/

const solution = (a, b) => {
  return () => {
    return a() + b();
  };
};
