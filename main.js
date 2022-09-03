const readline = require("readline");
const text = [
  {subject: ["I", "You", "They"]},
  {verb: ["bumfuzzle", "titter", "enjoy"]},
  {noun: ["erf", "fartlek", "hullabaloo"]},
  {preposition: ["by them", "for many hours", "while sitting"]}
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomValue = input => {
  return input[Math.floor(Math.random() * input.length)];
};

const t = () =>
  rl.question("Do you want another quote? (Y/N): ", answer => {
    if (answer.toUpperCase() === "Y") {
      const random_subject_word = randomValue(text[0].subject);
      const random_verb_word = randomValue(text[1].verb);
      const random_noun_word = randomValue(text[2].noun);
      const random_preposition_word = randomValue(text[3].preposition);
      console.log(
        `${random_subject_word} ${random_verb_word} ${random_noun_word} ${random_preposition_word}.`
      );
      doSomething();
    } else {
      rl.close();
    }
  });

const doSomething = () => {
  console.log(
    "Welcome to silly strings, where silly strings are printed to the console."
  );
  t();
};
doSomething();
