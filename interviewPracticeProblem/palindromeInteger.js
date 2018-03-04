/*
Problem was found on leetcode.com
Determine whether an integer is a palindrome. Do this without extra space.
*/

/*
Approach (without space limitation)
  1) Turn the integer into a string using .split();
  2) Create two points in the string, one at the beginning and one at the end
  3) these pointers will move inward through the string and check to make sure each pointed element match.
  4) Continuously do this until:
    a) no digit left && mismatch === 0  --> isPalindrome
    b) one digit left && mismatch === 0--> isPalindrome
    c) mismatch = 1 --> isNotPalindrome
*/

/*
Approach #1:
  1) Find the first digit and the list digit and compare them
  2) Remove the first and last digit
  3) Continuously do this until:
    a) num <= 0 && mismatch === 0  --> isPalindrome
    b) mismatch = 1 --> isNotPalindrome
*/

// 12,021
var isPalindrome = function(x) {
  // negative numbers are not palindrome because in -121, - & 1 are not equal
  if (x < 0 ) {
    return false;
  }

  // find the largest base10 divisor to extract the firstNum
  let divisor = 1;
  while (x / divisor >= 10) {
    divisor *= 10;

  }

  while (x !== 0) {
    // you have to Math.floor to remove the decimals
    let firstNum = Math.floor(x / divisor), // 1.2021
        lastNum = x % 10; // 1

    // if these numbers do not match, then x is not palindrome
    // i.e. 123 1 !== 3 && 123 is not palindrome
    if (firstNum !== lastNum) {
      return false

    // if both number match, then we have to move inward by removing the first and last num
    // i.e. 12,021 ==> 202;
    } else {
      x = Math.floor((x - (divisor * firstNum)) / 10); // 12,021 becomes Math.floor(202.1) ==> 202
      divisor = divisor / 100 ; // 10,000 ==> 1,000
    }
  }
  return true;
};

console.log('12021', isPalindrome(12021));
console.log('1211', isPalindrome(1211));

/*
Approach #2:
  1) Reverse the number and the reverted number to the original to see if they the same. if so, they are palindrome
  2) We may run in to the issue that the reversed integer exceeds int.MAX, which is the maximum positive value for a 32-bit signed binary integer in computing (2,147,483,647). To avoid this, we will only reverse up to the halfway point of an integer, since we are checking for palindrome, we only need to go up to the midpoint
    a) How do we know when we have reached a midpoint in the integer?
      Since we divided the number by 10, and multiplied the reversed number
      by 10, when the original number is less than the reversed number, it
      means we've processed half of the number digits.
*/

// 12,021
function isPalindrome2(x) {
  // Return false if x < 0
  // Also, if last digit of x is 0, in order to be palindrome, the first digit must also be 0
  // only 0 satisfy this case
    // i.e. palindrome of 90 is 09 but 09 is not an integer.

  if (x < 0 || x % 10 === 0 && x !== 0 ) {
    return false
  }

  let reversedNum = 0;
  while (reversedNum <= x) {
    reversedNum = (reversedNum * 10) + (x % 10); // 1 ==> 12 ==> 120...
    x = Math.floor(x / 10); // 12021 ==> Math.floor(1202.1) ===> Math.floor(120.2)...
    }

    // if x has even num of digits, then we will check if reversedNum === x
    // if x has odd num of digits, then we will disregard the last digit (middle digit in the entire original number) because palindrome can have a center digit
      // i.e. 12321 (it is palindrome) ; x = 12 and reversedNum = 123 (we can remove/disregard the 3)
    return reversedNum === x || x === Math.floor(reversedNum / 10)

}

console.log('12021', isPalindrome2(12021));
console.log('1021', isPalindrome2(1021));
