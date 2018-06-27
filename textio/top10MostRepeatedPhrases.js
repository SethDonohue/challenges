const mostRepeatedPhrases = (inputStr) => {
  const noCommaStr = inputStr.replace(/,/g, '');
  // Split Input into sentences
  const sentenceArr = noCommaStr.split(/[.!?]/);
  
  const allWordsPhraseMap = {};
  const nonRepeatPhraseMap = {};

  // clean all the commas from the input

  // find all the phrases in a sentence at least 3 words long
  const sentencePhraseFinder = (sentenceStr) => {
    // remove whitepsace as it interferes with future string comparison
    const trimmedSentence = sentenceStr.trim();
    const wordArr = trimmedSentence.split(' ');

    for (let i = 0; i < wordArr.length - 2; i++) {
      for (let j = i + 2; j < wordArr.length; j++) {
        let phrase = `${wordArr[i]} `;
        for (let k = i + 1; k <= j; k++) {
          if (k === j) {
            phrase = `${phrase}${wordArr[k]}`;
          } else {
            phrase = `${phrase}${wordArr[k]} `;
          }
        }

        // Keep track of what phrase we have seen and if we have seen it twice add to a non-repeating map to eliminate non-repeating phrases for future functions
        if (!allWordsPhraseMap[phrase]) {
          allWordsPhraseMap[phrase] = 1;
        } else if (nonRepeatPhraseMap[phrase]) {
          nonRepeatPhraseMap[phrase]++;
        } else if (allWordsPhraseMap[phrase]) {
          nonRepeatPhraseMap[phrase] = 2;
        }
      }
    }
  };

  // Check for comon phrases in eash sentence
  for (let i = 0; i < sentenceArr.length; i++) {
    sentencePhraseFinder(sentenceArr[i].toLowerCase());
  }

  console.log('non Repeat map', nonRepeatPhraseMap);

  // In the top 10 repeated phrases, remove any phrase that is INCLUDED in another longer phrase
  const phraseMapKeysArr = Object.keys(nonRepeatPhraseMap);
  let result = {};

  // Sort the keysArray so that it is easy to compare the longest element against the short ones.
  phraseMapKeysArr.sort((a, b) => b.length - a.length);
  console.log('Sorted Arr: ', phraseMapKeysArr);

  // Check if the map is only one repeated phrase
  if (phraseMapKeysArr.length < 2) {
    result = nonRepeatPhraseMap;
  } else {
    for (let i = 0; i < phraseMapKeysArr.length; i++) {
      result[phraseMapKeysArr[i]] = nonRepeatPhraseMap[phraseMapKeysArr[i]];
      for (let j = i; j < phraseMapKeysArr.length; j++) {
        if (!(i === j)) {
          if ((phraseMapKeysArr[i].includes(phraseMapKeysArr[j]))) {
            phraseMapKeysArr.splice(j, 1);
            j--;
          }
        }
      }
    }
  }
  console.log('Spliced Arr: ', phraseMapKeysArr);

  return result;
};


const testInput = 'The quick brown fox jumped over the lazy dog with some ice cream. with some ice cream. The lazy dog, peeved to be labeled lazy, with some ice cream ,with some ice cream , with some ice cream, jumped over a snoring turtle? In retaliation the quick brown fox jumped over ten snoring turtles. Then the quick brown fox refueled with, some ice cream!';

console.log(mostRepeatedPhrases(testInput));
