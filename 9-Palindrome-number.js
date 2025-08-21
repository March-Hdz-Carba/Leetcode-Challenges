//Given an integer x, return true if x is a palindrome, and false otherwise.
//Could you solve it without converting the integer to a string?
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

//explain the following console.log
  console.log(x % 10) // This gets the last digit of the number x 
  //why?  // Because the modulo operator (%) returns the remainder of division, x % 10 gives the last digit of x. 
  //give me examples  
  // For example, if x is 145675, then 145675 % 10 equals 5, which is the last digit of the number.
  //explain step by step the example
  // Step 1: Take the number 145675.
  // Step 2: Divide it by 10, which gives 14567 with a remainder of 5.
  // Step 3: The remainder (5) is the last digit
  // Step 4: So, 145675 % 10 equals 5.  
  //so always the remainder of any number divided by 10 gives the last digit of that number?
  // Yes, always. The last digit of any integer can be found by taking that integer modulo 10.

const isPalindrome = (x) => {
  // if (x < 0 || x.length -1 === 0) { //Numbers ending with 0 (except 0 itself) cannot be palindromes because reversed numbers can't start with 0.
  //   return false;
  // }
  if (x < 0) {
    return false;
  }

  const digitsArray = Array.from(String(x), Number); // Creates an array of numbers
  let reversedNumbers = [];

  for (let i = digitsArray.length - 1; i >= 0; i--) {
    reversedNumbers.push(digitsArray[i]);
  }

  const reverse = reversedNumbers.join('');

  console.log(reverse);
  console.log(x);

  return reverse == x;
}

console.log(isPalindrome(121));

