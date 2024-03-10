//DOM(Document Object Model) is tree like structure
//created by browser as the html load into the browser

console.log(document);

// elementById
// let headId = document.getElementById('oneId');
// let headId = document.getElementsByClassName(".heading");

// mostly try to this new thing
//quertSelector and querySelectorAll
let headEle = document.querySelector(".heading");
// let headEleclass = document.querySelector("#oneId");
// here you can try class and id too
console.log(headEle);

// getattribute and setattribute
let linkEle = document.querySelector("a");
// console.log(linkEle);
console.log(
  linkEle.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
);

//add style too
linkEle.style.color = "red";
linkEle.style.backgroundColor = "black";
