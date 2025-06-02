// function hello (){
//     console.log("hello");
    
// }
// setTimeout(hello, 1000)



// function hello (){
   
    
// }
// setTimeout(() => {
//  console.log("hello");
//     }, 2000);

/// callback
    // function sum(a, b){
    //     console.log(a + b);
    // }
    // function calculator(a, b, sumCallback){
    // sumCallback(a, b);
    // }
    // calculator(2,4, sum);

    // nesting


    // let age = 19;
    // if(age>=18){
    //     if(age>=18){
    //         console.log("senior");
    //     } else{
    //         console.log("middle");
    //     }
    // }else{
    //         console.log("child");   
    // }


    // nesting


    // for(let i = 0; i < 50; i++){
    //     let str = "";
    //     for (let j= 0; j < 5; j++){
    //         // console.log(j);
    //         str = str + j; 
    //     }
    //          console.log(i, str);
    // }

    // Callback hell

    // function getData(dataId){
    //     // console.log("data", dataId);

    //     setTimeout(() => {
    //          console.log("data", dataId);
    //     }, 2000); 
    // }



// call back hall 
//         function getData (dataId, getNextData) {
//         setTimeout(() => {
//              console.log("data", dataId);
//              if (getNextData) {
//                 getNextData();
//              }
//         }, 1000); 
//     }
// getData(1,() => {
//     console.log("geting data of 2.......");
//     getData(2 ,()=> {
//         console.log("geting data of 3.......");
//         getData(3 , ()=>{
//             console.log("geting data of 4.......");
//             getData(4);
            
//         });
//     });
// });


// promises
//  function getData (dataId, getNextData) {
//     return new Promise ((resolve,reject) => {
//          setTimeout(() => {
//             //  console.log("data", dataId);
//             //  resolve("success");
//             reject("error");
//              if (getNextData) {
//                 getNextData();
//               }
//       }, 2000); 
//  });
// }



//  let promise = new Promise((resolved, reject)=>{
//     console.log(" i am promise");
//     // resolved("sucessfull")
//     reject("some error occure ")
//  })
 

// promise

// const getPromise = () => {
//    return new Promise((resolved, reject)=>{
//     console.log(" i am promise");
//     resolved("sucessfull");
//     reject("Network error")
//  });
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled",res);
    
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
    
// })
 

// promise chain
function asyncFun () {
return new Promise((resolve , reject) => {
 setTimeout(() => {
    console.log("some data");
    
 }, 4000);
});
}
