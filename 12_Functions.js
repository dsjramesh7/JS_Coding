// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// function as paremeter and arguements
// function declaration/ function statement
function sum(a, b) {
  console.log(a + b);
}
sum(12, 67);

// function expression
let a = function (value) {
  console.log(`the value is: ${value}`);
};
a(12);

// arrow function
let arrow = () => console.log("yowai mo!!!");

arrow();

//return
