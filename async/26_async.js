console.log(1);
console.log(2);
console.log(3);

// async code you can say
setTimeout(() => {
  console.log("called back function called after 3 seconds");
  //but as you can see it will be code after every line output is done 
}, 5000);

console.log(4);
console.log(5);
