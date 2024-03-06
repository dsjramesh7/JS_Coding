// arrays
// it consists of di

let student = [1, "sonolax", "200kg", true];
let student2 = [2, "pikachu", "200kg", false];
console.log(student);

console.log(student[2]);
student[2] = "69kg";
console.log(student[2]);

// join method
console.log(student.join("__"));

console.log(student.indexOf("sonolax")); //case sensitive
console.log(student.concat(student2));

console.log(student.length);

// push and pop
student.push("why this");
console.log(student);
console.log(student.length);
console.log(student.pop());
console.log(student);
