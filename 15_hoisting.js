console.log(a); // will execute because var can be hoisted but will give undefined because var is declared not assigned to that value in the code excuted phase

// console.log(b);
//Uncaught ReferenceError: Cannot access 'b' before initialization cannot be hoisted let same for const too

console.log(sum); // will give function defination like whole fucntion code

var a = 12;
let b = 123;
function sum(a = 12, b = 34) {
  console.log(a + b);
}
