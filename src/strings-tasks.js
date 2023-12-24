function getStringLength(value) {
  if (value === null || value === undefined || value === '') {
    return 0;
  }

  return value.length;
}
function isString(value) {
  return typeof value === 'string';
}
function concatenateStrings(value1, value2) {
  value1 = value1 ?? '';
  value2 = value2 ?? '';

  return value1 + value2;
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
function removeLeadingWhitespaces(value) {
  if (value === null || value === undefined) {
    return '';
  }

  return value.replace(/^\s+/, '');
}
function removeTrailingWhitespaces(value) {
  if (value === null || value === undefined) {
    return '';
  }

  return value.replace(/\s+$/, '');
}
function repeatString(str, times) {
  if (str === null || str === undefined || times <= 0) {
    return '';
  }

  if (str.repeat) {
    return str.repeat(times);
  }

  let result = '';
  for (let i = 0; i < times; i++) {
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
function sumOfCodes(str) {
  if (str === null || str === undefined || str === '') {
    return 0;
  }

  let sum = 0;
  for (const char of str) {
    sum += char.codePointAt(0);
  }

  return sum;
}
function startsWith(str, substr) {
  if (str === null || str === undefined || substr === null || substr === undefined) {
    return false;
  }

  if (substr.length > str.length) {
    return false;
  }
  return str.substring(0, substr.length) === substr;
}
function endsWith(str, substr) {
  if (str === null || str === undefined || substr === null || substr === undefined) {
    return false;
  }

  if (substr.length > str.length) {
    return false;
  }

  return str.substring(str.length - substr.length) === substr;
}
function formatTime(minutes, seconds) {
  if (typeof minutes !== 'number' || minutes < 0 || Math.floor(minutes) !== minutes) {
    throw new Error('Invalid minutes value');
  }
  if (typeof seconds !== 'number' || seconds < 0 || Math.floor(seconds) !== seconds) {
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
function containsSubstring(/* str, substring */) {
  throw new Error('Not implemented');
}
function countVowels(str) {
  if (str === null || str === undefined) {
    return 0;
  }

  const vowels = new Set('aeiouAEIOUY');

  let vowelCount = 0;
  for (const char of str) {
    if (vowels.has(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}
function isPalindrome(str) {
  if (str === null || str === undefined || str.length === 0) {
    return false;
  }

  const processedStr = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = processedStr.length - 1;

  while (left < right) {
    if (processedStr[left++] !== processedStr[right--]) {
      return false;
    }
  }

  return true;
}
function findLongestWord(sentence) {
  if (!sentence) {
    return '';
  }

  const words = sentence.split(/\s+/);

  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
function reverseWords(str) {
  if (!str) {
    return '';
  }
  const words = str.split(/\s+/);
  const reversedWords = words.map(word => word.split('').reverse().join(''));

  return reversedWords.join(' ');
}
function invertCase(str) {
  if (str === null || str === undefined) {
    return str;
  }

  return str.replace(/[a-z]/gi, char => char.toUpperCase()).replace(/[A-Z]/gi, char => char.toLowerCase());
}
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
function extractNameFromTemplate(value) {
  if (!value) {
    return '';
  }
  const match = value.match(/Hello,\s(.*?)\s!/);

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
  return str.split(/;(?=(?:[^"]*"[^"]*")*(?![^"]*"))/)
    .map(email => email.trim())
    .filter(email => email.length > 0);
}
function encodeToRot13(str) {
  if (!str) {
    return '';
  }
  const rot13Map = new Map([
    ['a', 'n'], ['b', 'o'], ['c', 'p'], ['d', 'q'], ['e', 'r'],
    ['f', 's'], ['g', 't'], ['h', 'u'], ['i', 'v'], ['j', 'w'],
    ['k', 'x'], ['l', 'y'], ['m', 'z'], ['n', 'a'], ['o', 'b'],
    ['p', 'c'], ['q', 'd'], ['r', 'e'], ['s', 'f'], ['t', 'g'],
    ['u', 'h'], ['v', 'i'], ['w', 'j'], ['x', 'k'], ['y', 'l'],
    ['z', 'm'], ['A', 'N'], ['B', 'O'], ['C', 'P'], ['D', 'Q'],
    ['E', 'R'], ['F', 'S'], ['G', 'T'], ['H', 'U'], ['I', 'V'],
    ['J', 'W'], ['K', 'X'], ['L', 'Y'], ['M', 'Z'], ['N', 'A'],
    ['O', 'B'], ['P', 'C'], ['Q', 'D'], ['R', 'E'], ['S', 'F'],
    ['T', 'G'], ['U', 'H'], ['V', 'I'], ['W', 'J'], ['X', 'K'],
    ['Y', 'L'], ['Z', 'M']
  ]);

  return str.split('').map(char => rot13Map.get(char) || char).join('');
}
function getCardId(value) {
  if (!value || value.length !== 2) {
    return -1;
  }
  const rank = value[0];
  const suit = value[1];
  const rankValues = {
    'A': 0,
    '2': 1,
    '3': 2,
    '4': 3,
    '5': 4,
    '6': 5,
    '7': 6,
    '8': 7,
    '9': 8,
    '10': 9,
    'J': 10,
    'Q': 11,
    'K': 12
  };
  const suitGroups = {
    '♣': 0,
    '♦': 1,
    '♥': 2,
    '♠': 3
  };
  const rankIndex = rankValues[rank];
  const suitIndex = suitGroups[suit];
  return rankIndex * 4 + suitIndex;
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
