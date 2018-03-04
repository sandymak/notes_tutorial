// Problem was found on pramp.com
/*Array Quadruplet
Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.

Example:

input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
                     # whose sum is 20. Notice that there
                     # are two other quadruplets whose sum is 20:
                     # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
                     # asked to return the just one quadruplet (in an
                     # ascending order) */

  let arr = [2, 7, 4, 0, 9, 5, 1, 3],
  start = 20;

/*
  Approach:
    1) Find the sum of all possible pairs in the array and store them in a Map where the key is the sum and
      the value is an array of arrays containing the two numbers
      1a) it is an array of arrays becasue we can have more than a pair of numbers that sum up to an addend
         i.e if target is 20; 9 & 11 are addends of 20, and [2,7],[4,5] are addends of 9.
            therefore, we have to store them in the map as [[2,7], [4,5]];
    2) Loop through the keys of the map to find the second addend to sum up to the target.
    3) If the addend exists, we must ensure that two elements summing up to them are unique;
       i.e [2,7] and [7,4] add up to 20 but 7 is repeated, therefore needs to be rejected
       i.e [2,4] and [9,5] are all unique elements that add up to 20
    4) ISSUE: Cannot what the problem means 'return the first quadruple that we encounter'
      What does 'the first quadruple encountered' mean?
      How is [7,4,0,9] encoutnered 'first' as opposed to '[2,4,9,5]'?

  Big O notation: This solution has a time complexity of n^2*m*l;
     Step 1 is O(n^2) - loops through the entire array of numbers twice to create all possible sums
     Step 2 is O(m) - looping through the length of the map to find two addends that sum to target
     Step 3 is O(l) - There can be more than one pair of elements that add up to an addend,
                    so we have to traverse through the array of element pair to find two pairs that have unique elements that sum up to the target.
*/
function findArrayQuadruplet(input, target) {
  let mapOfPairSums = new Map(),
      firstIdx = 0,
      quadruplets = [];

      while (firstIdx <= input.length - 3) {
        for (let secondIdx = firstIdx + 1; secondIdx < input.length; secondIdx++) {
          let firstNum = input[firstIdx],
              secondNum = input[secondIdx],
              pairSum = input[firstIdx] + input[secondIdx];
          if (mapOfPairSums.has(pairSum)) {
            mapOfPairSums.get(pairSum).push([firstNum, secondNum]);
          } else {
            mapOfPairSums.set(pairSum, [[firstNum, secondNum]]);
          }
        }
        firstIdx++;
      }

    for (let key of mapOfPairSums.entries()) {
      let remainder = target - key,
        firstPairs = mapOfPairSums.get(key),
        secondPairs = mapOfPairSums.get(remainder);

      if (mapOfPairSums.has(remainder)) {
        if (firstPairs.length >= secondPairs.length) {
          for (let i = 0; i < firstPairs.length; i++) {
            for (let j = 0; j < secondPairs.length; j++) {
              let eachFirstPair = firstPairs[i],
                  eachSecondPair = secondPairs[j];
              if (eachFirstPair.includes(eachSecondPair[0]) ||
                  eachFirstPair.includes(eachSecondPair[1])) {
                break;
              } else if (!eachFirstPair.includes(eachSecondPair[0]) && !eachFirstPair.includes(eachSecondPair[1])){
                quadruplets = quadruplets.concat(eachFirstPair, eachSecondPair);
                break;
              }
          }
          }
          return quadruplets.sort();
        }
      }
    }
}

findArrayQuadruplet(arr, start); // [7,4,0,9]
