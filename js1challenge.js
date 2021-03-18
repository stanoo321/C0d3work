//Incremental Closure

/*Write a function called solution that takes in a number and returns a function.

whenever the returned function is called, the next incremental number will be returned

Example:*/

let resf = solution(5);
result = resf(); // 6
result = resf(); // 7

resf = solution(-5);
result = resf(); // -4
result = resf(); // -3

const solution = (num) => {
  return () => {
    num = num + 1;
    return num;
  };
};
module.exports = {
  solution,
};

/*Closure x times

Write a function called solution that takes in 2 parameters, a number and a function, and returns a function

The returned function can only be called the input number of times.

Whenever the returned function is called, it returns whatever the input function returns.
After the returned function has been called up to the first parameter number of times, calling returned function will always return null.*/

resf = solution(3, () => {
  return "hello";
});
result = resf(); // "hello"
result = resf(); // "hello"
result = resf(); // "hello"
result = resf(); // null

result = resf(); // null

resf = solution(1, () => {
  return 100;
});
result = resf(); // 100
result = resf(); // null

result = resf(); // null

const solution = (num, fun) => {
  return () => {
    if (num <= 0) {
      return null;
    }
    num = num - 1;
    return fun();
  };
};

//Repeated String

/*Write a function called solution that takes in 2 parameters, a number and string and returns the string repeated input parameter number of times

result = solution(3, "abc") // "abcabcabc"
result = solution(0, "hello") // ""

Reminder for students with prior experience: you are not allowed to use for and while loops. Reason*/

const solution = (num, str, result = "") => {
  if (num <= 0) {
    return result;
  }
  return solution(num - 1, str, result + str);
};

module.exports = {
  solution,
};

/*Calling input function
Write a function called solution that takes in a function.
The function will be called with increasing indexes (starting from 0) until the input function returns false
solution((e) => {
  // this function will be run 7 times with e: 0,1,2,3,4,5,6
  return e < 6
})
solution((e) => {
  // this function will be run 1 time with e: 0
  return false
})
solution((e) => {
  // this function will be run 4 times with e: 0,1,2,3
  return e < 3
})
Reminder for students with prior experience: you are not allowed to use for and while loops. Reason*/

const solution = (fun, i = 0) => {
  if (fun(i) === false) {
    return;
  }
  return solution(fun, i + 1);
};
module.exports = {
  solution,
};

/*Call function X Times
Write a function called solution that takes in 2 parameters, a number X and a function, and calls the function X number of times and then returns null.

Basically, solution should run the user provided function X times.
solution(88, () => { console.log('hello') }) // 'hello' should be printed out 88 times.

solution(9, () => { alert('hello') }) // alert('hello') should be ran 9 times.*/

const solution = (num, fun) => {
  if (num <= 0) {
    return;
  }
  fun();
  return solution(num - 1, fun);
};

/*isPrime

Write a function called solution that takes in a number and returns true if it's prime, false otherwise.

A prime number is a number that is greater than 1, and not divisible by any number other than itself.

There are a number of approaches to do this, but the simplest is to start a number i at 2, and keep using % to check if the input number is divisible by i.

result = solution(2) // true
result = solution(1) // false
result = solution(8) // false
result = solution(13) // true

Reminder for students with prior experience: you are not allowed to use for and while loops. Reason*/

const solution = (num, i = 2) => {
  if (num < i) {
    return false;
  }
  if (num === i) {
    return true;
  }
  if (num % i === 0) {
    return false;
  }
  return solution(num, i + 1);
};

/*Letter Find

Write a function called solution that takes in 2 parameters, a string and a letter, and returns true if the character exists in the string, false if the character does not exist in the string.

result = solution('abc', 'a') // true
result = solution('abc', 'd') // false

Reminder for students with prior experience: you are not allowed to use for and while loops. Reason*/

const solution = (inp, letter, i = 0) => {
  if (i === inp.length || !letter) {
    return false;
  }
  if (inp[i] === letter) {
    return true;
  }
  return solution(inp, letter, i + 1);
};

/*Letter Count
Write a function called solution that takes in 2 parameters, a string and a letter, and returns the number of times the character shows up in the string
result = solution('abc', 'a') // 1
result = solution('bccbccb', 'b') // 3
Reminder for students with prior experience: you are not allowed to use for and while loops. Reason*/

const solution = (inp, letter, counter = 0, i = 0) => {
  if (counter === inp.length) {
    return i;
  }
  if (inp[counter] === letter) {
    i = i + 1;
  }
  return solution(inp, letter, counter + 1, i);
};
/*Letter Map

Write a function called solution that takes in 2 parameters, a string and a function, and returns combined result of the function being called with every character in the string.

fun = (e) => {
  return '9'
}
result = solution('hello', fun) // "99999"

fun = (e) => {
  return e + '123'
}
result = solution('blah', fun) // "b123l123a123h123"

Reminder for students with prior experience: you are not allowed to use for and while loops. Reason*/

const solution = (str, fun, result = "", i = 0) => {
  if (i === str.length) {
    return result;
  }
  return solution(str, fun, result + fun(str[i]), i + 1);
};

/*Letter Loop

Write a function called solution that takes in 2 parameters, a string and a function, and returns a function.

    When the returned function is called for the first time, the input function will be called with the first character of the string.

    When the returned function is called for the second time, the input function will be called with the second character of the string.

After the input function is called with the last character of the string, calling the returned function will repeat #1, then #2, etc.

fun = solution('hel2', (e) => {
  console.log(e)
})
fun() // prints-> 'h'
fun() // prints-> 'e'
fun() // prints-> 'l'
fun() // prints-> '2'
fun() // prints-> 'h'
fun() // prints-> 'e'*/

const solution = (str, fun) => {
  let i = 0;
  return () => {
    if (!str) {
      return;
    }
    if (i === str.length) {
      i = 0;
    }
    const result = fun(str[i]);
    i = i + 1;
    return result;
  };
};

/*Delayed Closure

Write a function called solution takes in 2 parameters, a number and a function, and returns a function.

When the returned function is called, the input function will execute after input number milliseconds.

fun = solution(1800, () => {
  console.log('hello')
})
fun() // 'hello' will be printed out 1800ms after this function is called
fun() // 'hello' will be printed out 1800ms after this function is called*/

const solution = (a, fun) => {
  return () => {
    if (a < 0) {
      retrun;
    }
    setTimeout(fun, a);
  };
};
/*Delay 1 and 2

Write a function called solution that takes in 2 parameters, a number and a function.

    solution should execute the input function (which returns a number) after first input parameter milliseconds.
    The input function should be run again after waiting the returned number of milliseconds

solution(2000, () => {
  // This function will be run 2000ms after solution is called,
  //   and after that, it will be run after another 3000ms
  console.log('hello')
  return 3000
})*/

const solution = (a, fun) => {
  if (a < 0) {
    return;
  }
  setTimeout(() => {
    const okBread = fun();
    if (okBread < 0) {
      return;
    }
    setTimeout(fun, okBread);
  }, a);
};
