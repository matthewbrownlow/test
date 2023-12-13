
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];  // Array of letters


// Spread Operator for Array Concatenation
/** A new array named `moreMixedLetters` is created by using the spread (...) operator 
to concatenate `mixedLetters` with the additional letters 'h', 'k', 'g', 'j', 'i', 'l,'. */
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];


// Console Output
console.log(moreMixedLetters);


// Function Definition for Sorting and Reversing
/** Function updateSortReverse, takes an array `arr` and additional `letters` as arguments.
It combines them into a new array called combinedArray, sorts it in ascending order using 
`sort()`, and then reverses the order using `reverse()`. The sorted and reversed array is `returned`. */
const updateSortReverse = (arr, ...letters) => {
  const combinedArray = [...arr, ...letters];
  return combinedArray.sort().reverse();
};


// Function Invocation
/** The function `updateSortReverse` is called with `moreMixedLetters` and the letters 'n', 'm', and 'o'.
The result is stored in the variable `reverseSort`. */
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);

// Console Output
console.log(reverseSort);
console.log(mixedLetters);


/**
Enter into the Terminal:
node array-manipulation-function.js

Console Output:
[ 'b', 'd', 'a', 'c', 'f', 'e', 'h', 'k', 'g', 'j', 'i', 'l' ]
[ 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a' ]
[ 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a' ]
[ 'b', 'd', 'a', 'c', 'f', 'e' ]
*/
