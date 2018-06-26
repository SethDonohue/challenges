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