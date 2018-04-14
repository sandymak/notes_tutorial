// Fibonacci Sequence is a series of numbers where a number is found by adding up the two numbers before it.
// Starting with 0 and 1, the sequence goes:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34....

// Problem, create a function that will calculate the nth number in a fibonacci sequence

// Time Complexity - O(n) - the fibonacci sequence is generated and cached.
// Space Complexity - O(n) - a cache is created to store the fibonacci sequence
let fibCache = number => {
  let cache = {};
  if (cache[number]) {
    return cache[number];
  } else if (number <= 1) {
      return number;
  } else {
    cache[number] = fibCache(number - 2, cache) + fibCache(number - 1, cache);
  }
    console.log('what is cache?', cache);
  return cache[number];
}

console.log(fibCache(10));
