// Array methods

// Map
// create new Array from original array by applying
let amount = [100, 34, 450, 1263];
console.log(amount);
let newAmount = amount.map((sal, i) => {
  return sal * 3;
});
console.log(newAmount);

//filter
let filterArray = amount.filter((sal) => {
  return sal <= 100;
});
console.log(filterArray);

//reduce
let sum = amount.reduce(function (currentValue, nextValue) {
  return currentValue + nextValue;
}, 0);
console.log(sum);
