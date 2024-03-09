// object are 90% in js language like its heart of js
// Objects have key-value pair

let coder = {
  skill: "problem-Solving",
  noOfChai: 8,
  happiness: true,
};

console.log(coder);

// access the obj properties
console.log(coder.skill);
console.log(coder["skill"]);

//modify
coder.noOfChai = 69;
console.log(coder);
console.log(coder.noOfChai);

// delete
delete coder.noOfChai;
console.log(coder);

// this keywod purpose in object

let character = {
  Name: "Izuku Midoryia",
  skill: "Detroiot Smash",
  AcquiredAbility: 20,
  Enemy: "All for one",
  PowerFulCharacter: true,
  Sentence: function () {
    return `I am ${this.Name} my enemy is ${this.Enemy} my limit as of now is ${this.AcquiredAbility}.`;
  },
};

console.log(character);
console.log(character.Sentence());
