// Take - home Problem

// Given a string representing a document, write a function which returns the top 10 most frequent repeated phrases.A phrase is a stretch of three to ten consecutive words and cannot span sentences.Omit a phrase if it is a subset of another, longer phrase, even if the shorter phrase occurs more frequently(for example, if “cool and collected” and “calm cool and collected” are repeated, do not include “cool and collected” in the returned set).A phrase is repeated if it is used two or more times.

//   We've provided an example input and output below, and encourage you to come up with your own as well to validate the code's behavior.

// Example input

// The quick brown fox jumped over the lazy dog.
// The lazy dog, peeved to be labeled lazy, jumped over a snoring turtle.
// In retaliation the quick brown fox jumped over ten snoring turtles.
// Then the quick brown fox refueled with some ice cream.

// Example output

// ['the lazy dog', 'the quick brown fox jumped over']


// find all the phrases in a sentence at least 3 words long
const sentencePhraseFinder = (sentenceStr) => {
  const sentenceArr = sentenceStr.split(' ');
  const phraseMap = {};

  for (let i = 0; i < sentenceArr.length - 2; i++) {
    for (let j = i + 2; j < sentenceArr.length; j++) {
      let tempStr = `${sentenceArr[i]} `;
      for (let k = i + 1; k <= j; k++) {
        tempStr = `${tempStr}${sentenceArr[k]} `;
      }
      if (phraseMap[tempStr]) {
        phraseMap[tempStr]++;
      } else {
        phraseMap[tempStr] = 1;
      }
    }
  }
  return phraseMap;
};

const testStr = 'I am a big brown cow a big brown cow a big brown cow';
const phrases = sentencePhraseFinder(testStr);

// First remove non-repeated phrase
const removeNonRepeats = (inputMap) => {
  const newMap = {};
  const keysArray = Object.keys(inputMap);

  for (let i = 0; i < keysArray.length; i++) {
    if (inputMap[keysArray[i]] > 1) {
      newMap[keysArray[i]] = inputMap[keysArray[i]];
    }
  }
  return newMap;
};

const cleanedMap = removeNonRepeats(phrases);

// In the top 10 repeated phrases, remove any phrase that is INCLUDED in another longer phrase
const cleanedMapKeysArr = Object.keys(cleanedMap);
const result = [];
console.log(cleanedMapKeysArr);
for (let i = 0; i < cleanedMapKeysArr.length; i++) {
  for (let j = 0; j < cleanedMapKeysArr.length; j++) {
    console.log('I str: ', cleanedMapKeysArr[i]);
    console.log('J str: ', cleanedMapKeysArr[j]);
    if (!cleanedMapKeysArr[i].includes(cleanedMapKeysArr[j])) {
      result.push(cleanedMapKeysArr[i]);
    } 
  }
}

// console.log('RESULT: ', result);
