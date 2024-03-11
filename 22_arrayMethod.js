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

//join
console.log(character.join(","));

//slice
let slicedthing = num.slice(1, 4);
console.log(slicedthing);

//splice method
let Name = ["rey", "mey", "day", "wey"];
Name.splice(2, 1, "yo");
console.log(Name);
