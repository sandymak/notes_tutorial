// String Search

// Prompt
// You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

// Examples
console.log(indexOf('or', 'hello world')); // should return 7
console.log(indexOf('hello world', 'or')); // should return -1
console.log(indexOf('howdy', 'hello world')); // should return -1
console.log(indexOf('oox', 'ooboxoooxo')); // should return 6

// Approach
  // 1) You want to utilize the first letter of the needle (search term) to determine where to begin your search in the haystack
  // 2) Inside the inner-loop (thorugh the needle) is where you want to be diligent:
      // a) You don't want the inner loop to run if the match doesn't exist
      // b) You also want to keep track of when the entirety of the needle has been traversed so you know you have an exact match
  // 3) If there isn't a match, you need to return -1

  // Big O
  // 1) Space Complexity = O(1) this is constant space as we didn't need to create any new data storage in our solution
  // 2) Time Complexity = O(h*n) where h is the length of the haystack and n is the length of the needle. At the worst, we need to traverse
        // through the entirety of the haystack to look at every char in the haystack
        // through the entirety of the needle to look at every char in the needle.
function indexOf (needle, haystack) {
  for (let hIdx = 0; hIdx < haystack.length - needle.length; hIdx++) {
    for (let nIdx = 0; nIdx < needle.length; nIdx++) {
      if (haystack[hIdx + nIdx] !== needle[nIdx]) break;
      if (nIdx + 1 === needle.length) return hIdx;
    }
  }
  return -1
}
