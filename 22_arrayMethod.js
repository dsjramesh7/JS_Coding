// array methods
let character = ["a", "b", "c", "d", "e"];
console.log(character);

// reverse
character.reverse();
console.log(character);

//concatenated
let num = [1, 2, 3, 4, 5];
let newArray = character.concat(num);
console.log(newArray);

// spread operator
let spreadArray = [...num, ...character];
console.log(spreadArray);
