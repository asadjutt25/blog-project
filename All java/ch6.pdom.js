// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from apna college students";

let divs = document.querySelectorAll(".box");
console.dir(divs);

let idx=1;
for (div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}
    console.log(div.innerText);
    

// divs[0].innerText = "new unique value of 1";
// divs[1].innerText = "new unique value of 2";
// divs[2].innerText = "new unique value of 3";