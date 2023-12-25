//Exercise 1 Q.no 18.
const sentence =
  "You cannot end a sentence with because because because is a conjunction";
const word = "because";

const lastIndex = sentence.lastIndexOf(word);

console.log(`The last occurrence of "${word}" is at index ${lastIndex}`);
//Exercise 1 Q.no 25.
const text = "30 Days Of JavaScript";

const repeatedText = text.repeat(2);

console.log(repeatedText);
//Exercise 2 Q.no 6.
const mysentence = "I hope this course is not full of jargon";
const wordTobeChecked = "jargon";

const containsJargon = mysentence.includes(wordTobeChecked);

if (containsJargon) {
  console.log(`The sentence contains the word "${wordTobeChecked}".`);
} else {
  console.log(`The sentence does not contain the word "${wordTobeChecked}".`);
}
//Exercise 2 Q.no 11.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
//Exercise 2 Q.no 12.
const my_sentence =
  "You cannot end a sentence with because because because is a conjunction";
const phrase = my_sentence.substr(31, 23);

console.log(phrase);
// Exercise 3 Q.no 2
const my2_sentence =
  "You cannot end a sentence with because because because is a conjunction";
const my_wordToMatch = "because";

const regex = new RegExp(my_wordToMatch, "gi");
const matches = my2_sentence.match(regex);
const count = matches ? matches.length : 0;

console.log(
  `The word "${my_wordToMatch}" appears ${count} times in the sentence.`
);
