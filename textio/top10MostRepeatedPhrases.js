const mostRepeatedPhrases = (inputStr) => {
  const allWordsPhraseMap = {};
  const repeatedPhraseMap = {};

  // clean all the commas from the input
  const noCommaStr = inputStr.replace(/,/g, '');
  // Split Input into sentences
  const sentenceArr = noCommaStr.split(/[.!?]/);
  
  // Function to find all the phrases in a sentence at least 3 words long
  const sentencePhraseFinder = (sentenceStr) => {
    // remove whitepsace as it interferes with future string comparison
    const trimmedSentence = sentenceStr.trim();
    const wordArr = trimmedSentence.split(' ');

    // Add phrase to All Words Map to keep track of all phrases,
    // then add to repeating map if phrase repeated
    const addToMap = (phraseToAdd) => {
      if (!allWordsPhraseMap[phraseToAdd]) {
        allWordsPhraseMap[phraseToAdd] = 1;
      } else if (repeatedPhraseMap[phraseToAdd]) {
        repeatedPhraseMap[phraseToAdd]++;
      } else if (allWordsPhraseMap[phraseToAdd]) {
        repeatedPhraseMap[phraseToAdd] = 2;
      }
    };

    // Make all possible phrases for each sentence
    for (let i = 0; i < wordArr.length - 2; i++) {
      for (let j = i + 2; j < wordArr.length; j++) {
        let currPhrase = `${wordArr[i]} `;
        for (let k = i + 1; k <= j; k++) {
          if (k === j) {
            currPhrase = `${currPhrase}${wordArr[k]}`;
          } else {
            currPhrase = `${currPhrase}${wordArr[k]} `;
          }
        }
        addToMap(currPhrase);
      }
    }
  };

  // Check for comon phrases in eash sentence
  for (let i = 0; i < sentenceArr.length; i++) {
    sentencePhraseFinder(sentenceArr[i].toLowerCase());
  }

  // In the top 10 repeated phrases, remove any phrase that is INCLUDED in another longer phrase
  const phraseMapKeysArr = Object.keys(repeatedPhraseMap);
  let result = {};
  const returnArr = [];

  // Sort the keysArray so that it is easy to compare the longest element against the short ones.
  phraseMapKeysArr.sort((a, b) => b.length - a.length);
  // console.log('Sorted Arr: ', phraseMapKeysArr);

  // Check if the map is only one repeated phrase
  if (phraseMapKeysArr.length < 2) {
    result = repeatedPhraseMap;
  } else {
    for (let i = 0; i < phraseMapKeysArr.length; i++) {
      let tempObj = {
        phrase: phraseMapKeysArr[i],
        frequency: repeatedPhraseMap[phraseMapKeysArr[i]],
      };

      // result[phraseMapKeysArr[i]] = repeatedPhraseMap[phraseMapKeysArr[i]];
      returnArr.push(tempObj);
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
  // console.log('Spliced Arr: ', phraseMapKeysArr);
  returnArr.sort((a, b) => b.frequency - a.frequency);
  return returnArr;
};


const testInput = 'The quick brown fox jumped over The quick brown fox jumped over the lazy dog with some ice cream. with some ice cream... The lazy dog, peeved to be labeled lazy, with some ice cream ,with some ice cream , $$$ with some ice cream, jumped over a snoring turtle? In retaliation 3 the quick 555 brown fox jumped over the ten snoring 1234 turtles. Then the quick brown fox refueled with, some ice cream!';

console.log(mostRepeatedPhrases(testInput));
