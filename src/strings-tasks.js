function getStringLength(value) {
  if (value === null || value === undefined || value === '') {
    return 0;
  }

  return value.length;
}
/**
 * Returns true if the value is a string, otherwise returns false.
 *
 * @param {string} value - The value to check if it's a string.
 * @return {boolean} - True if the value is a string, false otherwise.
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1 - The first string to concatenate.
 * @param {string} value2 - The second string to concatenate.
 * @return {string} - The concatenated string.
 *
 * @example
 *   concatenateStrings('aa', 'bb') => 'aabb'
 *   concatenateStrings('aa', '') => 'aa'.
 *   concatenateStrings('', 'bb') => 'bb'
 */
function concatenateStrings(value1 = '', value2 = '') {
  return value1.concat(value2);
}

function getFirstChar(value) {
  if (value === null || value === undefined || value === '') {
    return '';
  }

  return value.charAt(0);
}
function removeLeadingAndTrailingWhitespaces(value) {
  if (value === null || value === undefined) {
    return '';
  }

  return value.trim();
}
/**
 * Removes only leading whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading whitespaces from.
 * @return {string} - The string with leading whitespaces removed.
 *
 * @example
 *   removeLeadingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingWhitespaces('cat ') => 'cat '
 *   removeLeadingWhitespaces('\t\t\tHello, World! ') => 'Hello, World! '
 */
function removeLeadingWhitespaces(value) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trimStart();
}

/**
 * Removes only trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove trailing whitespaces from.
 * @return {string} - The string with trailing whitespaces removed.
 *
 * @example
 *   removeTrailingWhitespaces('  Abracadabra') => '  Abracadabra'
 *   removeTrailingWhitespaces('cat ') => 'cat'
 *   removeTrailingWhitespaces('\t\t\tHello, World! ') => '\t\t\tHello, World!'
 */
function removeTrailingWhitespaces(value) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trimEnd();
}

function repeatString(str, times) {
  if (str === null || str === undefined || times <= 0) {
    return '';
  }

  if (str.repeat) {
    return str.repeat(times);
  }

  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += str;
  }
  return result;
}
function removeFirstOccurrences(str, value) {
  if (str === null || str === undefined) {
    return str;
  }

  const index = str.indexOf(value);

  if (index === -1) {
    return str;
  }

  return str.slice(0, index) + str.slice(index + value.length);
}
function removeLastOccurrences(str, value) {
  if (str === null || str === undefined) {
    return str;
  }

  const index = str.lastIndexOf(value);

  if (index === -1) {
    return str;
  }

  return str.slice(0, index) + str.slice(index + value.length);
}
/**
 * Calculate the sum of character codes of the given string.
 *
 * @param {string} str - The input string.
 * @return {number} - The sum of character codes of the string.
 *
 * @example
 *   sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
 *   sumOfCodes('12345') => 255 (49 + 50 + 51 + 52 + 53 = 255)
 *   sumOfCodes('') => 0
 *   sumOfCodes() => 0
 */
function sumOfCodes(str) {
  if (typeof str !== 'string' || str === '') {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

/**
 * Checks if a string starts with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   startsWith('Hello World', 'World') => false
 *   startsWith('Hello World', 'Hello') => true
 */
function startsWith(str, substr) {
  if (typeof str !== 'string' || typeof substr !== 'string') {
    return false;
  }

  return str.startsWith(substr);
}
/**
 * Checks if a string ends with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   endsWith('Hello World', 'World') => true
 *   endsWith('Hello World', 'Hello') => false
 */
function endsWith(str, substr) {
  if (typeof str !== 'string' || typeof substr !== 'string') {
    return false;
  }

  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  if (
    typeof minutes !== 'number' ||
    minutes < 0 ||
    Math.floor(minutes) !== minutes
  ) {
    throw new Error('Invalid minutes value');
  }
  if (
    typeof seconds !== 'number' ||
    seconds < 0 ||
    Math.floor(seconds) !== seconds
  ) {
    throw new Error('Invalid seconds value');
  }
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}
function reverseString(str) {
  if (str === null || str === undefined) {
    return str;
  }

  return str.split('').reverse().join('');
}
function orderAlphabetically(str) {
  if (str === null || str === undefined) {
    return str;
  }

  const chars = str.split('');

  chars.sort();

  return chars.join('');
}

/**
 * Checks if a given string contains a specified substring.
 *
 * @param {string} str - The input string to search within.
 * @param {string} substring - The substring to check for in the input string.
 * @returns {boolean} - True if the input string contains the specified substring, false otherwise.
 *
 * @example
 *   containsSubstring('Hello, World!', 'World') => true
 *   containsSubstring('JavaScript is Fun', 'Python') => false
 *   containsSubstring('12345', '34') => true
 */
function containsSubstring(str, substring) {
  if (typeof str !== 'string' || typeof substring !== 'string') {
    return false;
  }

  return str.includes(substring);
}
/**
 * Returns the number of vowels in the string.
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - The input string.
 * @return {number} - The number of vowels in the string.
 *
 * @example:
 *   countVowels('apple')  => 2
 *   countVowels('banana') => 3
 *   countVowels('cherry') => 2
 *   countVowels('aEiOu') => 5
 *   countVowels('XYZ') => 1
 */
function countVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  return str.split('').filter((char) => vowels.includes(char)).length;
}
/**
 * Returns true if the string is a palindrome; otherwise false.
 * https://en.wikipedia.org/wiki/Palindrome
 *
 * @param {string} str - The input string.
 * @return {bool} - True if the string is a palindrome, false otherwise.
 *
 * @example:
 *   isPalindrome('madam') => true
 *   isPalindrome('racecar') => true
 *   isPalindrome('apple') => false
 *   isPalindrome('No lemon, no melon') => true
 */
function isPalindrome(str) {
  if (str === null || str === undefined || str.length === 0) {
    return false;
  }

  const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const processedStrLength = processedStr.length;

  for (let i = 0; i < processedStrLength; i += 1) {
    if (processedStr[i] !== processedStr[processedStrLength - 1 - i]) {
      return false;
    }
  }

  return true;
}
/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(sentence) {
  if (!sentence) {
    return '';
  }

  const words = sentence.split(/\s+/);

  return words.reduce(
    (longestWord, word) =>
      word.length > longestWord.length ? word : longestWord,
    ''
  );
}
/**
 * Returns the string where each word is reversed.
 *
 * @param {string} str - The input string.
 * @return {string} - The string where each word is reversed.
 *
 * @example:
 *   reverseWords('Hello World') => 'olleH dlroW'
 *   reverseWords('The Quick Brown Fox') => 'ehT kciuQ nworB xoF'
 */
function reverseWords(str) {
  if (!str) {
    return '';
  }
  const words = str.split(/\s+/);
  const reversedWords = words.map((word) => word.split('').reverse().join(''));

  return reversedWords.join(' ');
}
/**
 * Inverts the case of each character in the given string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The string with the case of each character inverted.
 *
 * @example
 *   invertCase('Hello, World!') =>  'hELLO, wORLD!'
 *   invertCase('JavaScript is Fun') => 'jAVAsCRIPT IS fUN'
 *   invertCase('12345') => '12345'
 */
function invertCase(str) {
  if (str === null || str === undefined) {
    return str;
  }

  return [...str]
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value - The input value.
 * @return {string} - The name extracted from the template.
 *
 * @example
 *   extractNameFromTemplate('Hello, John Doe!') => 'John Doe'
 *   extractNameFromTemplate('Hello, Chuck Norris!') => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  if (!value) {
    return '';
  }

  const match = value.match(/^Hello, (.+)!$/);
  return match ? match[1] : '';
}

function unbracketTag(str) {
  if (!str || str.length < 2 || str[0] !== '<' || str[str.length - 1] !== '>') {
    return str;
  }

  return str.substring(1, str.length - 1);
}
function extractEmails(str) {
  if (!str) {
    return [];
  }
  return str
    .split(/;(?=(?:[^"]*"[^"]*")*(?![^"]*"))/)
    .map((email) => email.trim())
    .filter((email) => email.length > 0);
}
function encodeToRot13(str) {
  if (!str) {
    return '';
  }
  const rot13Map = new Map([
    ['a', 'n'],
    ['b', 'o'],
    ['c', 'p'],
    ['d', 'q'],
    ['e', 'r'],
    ['f', 's'],
    ['g', 't'],
    ['h', 'u'],
    ['i', 'v'],
    ['j', 'w'],
    ['k', 'x'],
    ['l', 'y'],
    ['m', 'z'],
    ['n', 'a'],
    ['o', 'b'],
    ['p', 'c'],
    ['q', 'd'],
    ['r', 'e'],
    ['s', 'f'],
    ['t', 'g'],
    ['u', 'h'],
    ['v', 'i'],
    ['w', 'j'],
    ['x', 'k'],
    ['y', 'l'],
    ['z', 'm'],
    ['A', 'N'],
    ['B', 'O'],
    ['C', 'P'],
    ['D', 'Q'],
    ['E', 'R'],
    ['F', 'S'],
    ['G', 'T'],
    ['H', 'U'],
    ['I', 'V'],
    ['J', 'W'],
    ['K', 'X'],
    ['L', 'Y'],
    ['M', 'Z'],
    ['N', 'A'],
    ['O', 'B'],
    ['P', 'C'],
    ['Q', 'D'],
    ['R', 'E'],
    ['S', 'F'],
    ['T', 'G'],
    ['U', 'H'],
    ['V', 'I'],
    ['W', 'J'],
    ['X', 'K'],
    ['Y', 'L'],
    ['Z', 'M'],
  ]);

  return str
    .split('')
    .map((char) => rot13Map.get(char) || char)
    .join('');
}
/**
 * Returns playid card id.
 *
 * Playing cards initial deck includes the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
// function getCardId(value) {
//   if (!value || value.length !== 2) {
//     return -1;
//   }
//   const rank = value[0];
//   const suit = value[1];
//   const rankValues = {
//     A: 13,
//     2: 1,
//     3: 2,
//     4: 3,
//     5: 4,
//     6: 5,
//     7: 6,
//     8: 7,
//     9: 8,
//     10: 9,
//     J: 10,
//     Q: 11,
//     K: 12,
//   };
//   const suitGroups = {
//     '♠': 0,
//     '♥': 1,
//     '♦': 2,
//     '♣': 3,
//   };
//   const rankIndex = rankValues[rank];
//   const suitIndex = suitGroups[suit];
//   return rankIndex * 4 + suitIndex;
// }
function getCardId(value) {
  const rankArray = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const suitArray = ['♣', '♦', '♥', '♠'];

  const suit = value.slice(-1);
  const rank = value.slice(0, -1);

  const rankIndex = rankArray.indexOf(rank);
  const suitIndex = suitArray.indexOf(suit);

  if (rankIndex === -1 || suitIndex === -1) {
    throw new Error(`Invalid card: ${value}`);
  }

  return suitIndex * 13 + rankIndex;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
