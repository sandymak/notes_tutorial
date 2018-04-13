// Dictionary Word Finder

// Interviewer Prompt
// Given an alphabetical array of dictionary entries and a word to search for, find that word's definition (if it exists).
// A dictionary entry is just a string where the word's name appears first, followed by - [definition].

// Aproach (Caching) -
  // 1) We can create a Map to store ALL the dictionary such that we will only need to spend time
      // to create the dictionary array once and look-up will be constant
  //Big O
  // Space Complexity = O(d), where d is the length of all the dictionary arrays that we create
  // Time Complexity = O(d) (preprocessing) - we will need to traverse through the entirety of the dictionary array to create the Map
      // Once the Map is created, then look up is constant time

// Approach (binary Search) -
  // 1) Since the dictionaryArr is sorted (alphabetically) we can perform binary search to avoid traversing through the entire array
  //Big O
    //Space Complexity - O(1), we do not need to create any new data storage
    //time Complexity - O(w log d) where w is the length of the word to search and d is the length of the dictionary


const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or conversation',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
  'of - Expressing the relationship between a part and a whole',
  'that - Used to identify a specific person or thing observed or heard by the speaker',
  'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of (a particular location)'
];
// Binary Search Approach
console.log(definitionOf2('be', dictionary)); // should return 'Exist'
console.log(definitionOf2('that', dictionary)); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
console.log(definitionOf2('to', dictionary)); // should return 'Expressing motion in the direction of (a particular location)'
console.log(definitionOf2('wizbing', dictionary));

function definitionOf2(word, dict) {
  let previousLeft = 0;
  let previousRight = dict.length - 1;
  let index;
  while (index !== previousLeft && index !== previousRight) {
    // getting the midpoint between the two outer bounds
    index = Math.floor((previousLeft + previousRight) / 2);
    if (dict[index].startsWith(`${word} - `)) {
      // return the 'definition' portion of the dictionary
      return dict[index].slice(word.length + 3);
    }
    // the earlier in the alphabeth a char, the lower its charCode
    if (word < dict[index]) {
      // if word is earlier in the alphabet, then you want to shrink the search bracket to the left side of the midpoint (index)
      // [l,0,0,m,0,0,r] ---> [l,0,0,newR,m]
      previousRight = index - 1;
    } else {
      // if word is later in the alphabet, then you want to shrink the search bracket to the right side of the midpoint (index)
      // [l,0,0,m,0,0,r] ---> [m, newL,0,0,r]
      previousLeft = index + 1;
    }
  }
}

// Caching Approach
const cache = new Map();
// console.log(definitionOf('be', dictionary)); // should return 'Exist'
// console.log(definitionOf('that', dictionary)); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
// console.log(definitionOf('to', dictionary)); // should return 'Expressing motion in the direction of (a particular location)'
// console.log(definitionOf('wizbing', dictionary)); // should return undefined

function definitionOf(word, dict) {
  let dictionaryHash = findOrCreateCache(dict);
  return dictionaryHash[word];
}
function findOrCreateCache (dict) {
  let dictionaryHash = {};

  if (cache.has(dict)) return cache.get(dict)
  dict.forEach(definition => {
    let [word, meaning] = definition.split(' - ');
    dictionaryHash[word] = meaning;
  cache.set(dict, dictionaryHash);
  })

  return dictionaryHash
}

