console.log("hello");

/* console.log(document.body);
console.dir(document.body.childNodes)*/ 

/* document.body.style.background="green"; 
 document.body.childNodes[3].innerText = "waqt";*/

//  selecting with id 

/*let heading = document.getElementById("heading")
console.dir(heading);

let headings =  document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

let button = document.getElementById("myid")
console.dir(button);
let parahs = document.getElementsByTagName("p");
console.log(parahs);*/

// query querySelectorAll

/*let elements = document.querySelector("p"); //1st element
console.dir(elements);

let allelements = document.querySelectorAll("p"); //All element
console.dir(allelements);

let element = document.querySelector(".heading-class"); //1st element
console.dir(element);

let allelemnts = document.querySelectorAll(".heading-class"); //All element
console.dir(allelemnts);

let elemnt = document.querySelector("#myid"); //1st element
console.dir(elemnt);

document.querySelector("div"); 


document.querySelector("div").children;*/


// new topic 

/*let div = document.querySelector("div");
console.dir(div);
let heading = document.querySelector("h1")*/

// practice question 
// question no 1:

/*let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from apna college";*/ //concate

// question no 2:

let div = document.querySelectorAll(".box");

let index = 1;
for (div of div){
    div.innerText = `new unique value ${index}`;
    index++;
}
/*for (div of div){
    console.log(div.innerText);
    
}*/

/*console.log(div[0]);
console.log(div[1]);
div[0].innerText = "new unique value 1";
div[1].innerText = "new unique value 2";
div[2].innerText = "new unique value 3";*/
