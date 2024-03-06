// strings
// JS strings are immutable
// it means if you concatenate or do some operation it will create in new memory location

let firstName = "Light";
let LastName = "midoriya";
let hobbies = "   kuch bhi    ";

// method one to join
let fullName1 = firstName + " " + LastName;
console.log(fullName1, typeof fullName1);

// method two to join
let fullName2 = `hello there ${firstName} ${LastName}`;
console.log(fullName2);

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName[2]);
console.log(LastName.indexOf("o"));
console.log(hobbies.trim());
console.log(hobbies.includes("gangam"));

// slice method
console.log(LastName.slice(0, 3)); // its excludes last index mean it will show: 0-2

//split method
const yo = "hello world here ther something like that";
console.log(yo.split(" "));
console.log(yo.split(" ").join(", "));

// NOTE: this all does not mutate original string
