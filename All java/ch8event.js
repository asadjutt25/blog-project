let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     // console.log("you are inside div");
//       console.log(evt);
//  console.log(evt.type);
//  console.log(evt.target);
//  console.log(evt.clientX , evt.clientY);
    
// };

// btn1.onclick = (evt) => {
//         console.log(evt);
//  console.log(evt.type);
//  console.log(evt.target);
//  console.log(evt.clientX , evt.clientY);
// };

//addeventlistener on click
// btn1.addEventListener("click", (evt)=> {
//     // console.log("you are inside div");
//       console.log("button 1 was click - handler 1");
//  console.log(evt.type);
//  console.log(evt.target);
//  console.log(evt.clientX , evt.clientY);
    
// }) ;

 btn1.addEventListener("click", ()=> {
       console.log("button 1 was click handler1");
       }) ;


 btn1.addEventListener("click", ()=> {
       console.log("button 1 was click handler2");
       }) ;

      const handler3 = () => {
          console.log("button 1 was click handler3");   
      };

  btn1.addEventListener("click", handler3);
       
   const handler5 = () => {
          console.log("button 1 was click handler5");   
      };

  btn1.addEventListener("click", handler5);


        btn1.addEventListener("click", ()=> {
       console.log("button 1 was click handler4");
       }) ;

       btn1.removeEventListener("click", handler3);