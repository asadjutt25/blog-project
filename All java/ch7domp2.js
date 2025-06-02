// let div = document.querySelector("div");
// console.log(div);
// div.style.backgroundColor = "green";
// div.innerText="hello bro";

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));

//  for add button grom java tto html page

// let newBtn = document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);
// let p = document.querySelector("p");
// p.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi , I am new </i>";
document.querySelector("body").prepend(newHeading);

let newBtn = document.createElement("button");
newBtn.innerHTML = "<i>Hi , I am new button </i>";
document.querySelector("body").append(newBtn);

// for remove from html 
let parag = document.querySelector("p");
parag.remove();

// newHeading.remove();