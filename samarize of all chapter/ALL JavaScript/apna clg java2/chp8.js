//  node event   
   let btn1 = document.querySelector("#btn1");
/*btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25; 
    a++;
    console.log(a);  
}*/
/*let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside of the div");
    
};*/
// event object

/*let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,  evt.clientY);
};

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,  evt.clientY);
};*/

// Event listeners 

/*btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked");
    console.log(evt);
      console.log(evt.type);
    });*/

    
/*btn1.addEventListener("click", () => {
    console.log("button1 was clicked -handler 2");
    });

      const handler3 = () => {
           console.log("button1 was clicked -handler 3");
      };

btn1.addEventListener("click", handler3 );
        
btn1.addEventListener("click", () => {
    console.log("button1 was clicked -handler 4");
    });

    btn1.removeEventListener("click", handler3 );
*/


// practice set 

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";
modebtn.addEventListener("click", () => {
  if(currmode === "light") {
    currmode = "dark";
  body.classList.add("dark");
  body.classList.remove("light");
  } else {
    currmode = "light";
   body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currmode);
  
});

