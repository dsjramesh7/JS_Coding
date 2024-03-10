// "objects/Arrays" how reference are passed to variable.

let OriginalArray = [1, 2, 3, 4, 5, 6, 7];

//pass by reference
let refArray = OriginalArray;

console.log("original ", OriginalArray);
console.log("referenceArray ", refArray);

// means the other array is pointing to the same original array values
// eg:
refArray[2] = 96;
console.log(OriginalArray);
console.log(refArray);

// to solve this thing we can use spread operator
let valueCode = [...OriginalArray];
valueCode[1] = 476;
// it will create new array of the value code copy like that
console.log(valueCode);
console.log(OriginalArray);
