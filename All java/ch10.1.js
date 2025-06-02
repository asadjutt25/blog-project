
// class ToyotaCar {
//     constructor(brand,milage) {
//         console.log("create a new object");
//         this.brand = brand;
//         this.milage = milage;
//     }

// start() {
//     console.log("start");
// }
// stop() {
//     console.log("stop");  
// }
// //  setBrand(brand){
// //     this.brandName = brand;
// //  }
// };
//  let fortuner = new ToyotaCar("fortunar",10);
//  console.log(fortuner);
 
// //  fortuner.setBrand("fortuner");
//  let luxes = new ToyotaCar("luxes",12);
// //   luxes.setBrand("luxes",12);
//  console.log(luxes);







class person{
    constructor(name){

        //   console.log("enter perent constructor");
        this.species = "homo species";
        this.name = name;
    }
    eat() {
        console.log("eat");
        
    }
    sleep(){
        console.log("sleep");
        
    }
    work(){
        console.log("do nothing");
        
    }
}
class engineer extends person {
    constructor(name){
        // console.log("enter child constructor");
        
         super(name);
        // this.branch = branch;
        //   console.log("exit child constructor");
    }
    work() {
        super.eat();
        console.log("solve problem , bulid somethings");
        
    }
}
//  class doctor extends person {
//     work() {
//         console.log("");       
//     }
// }


let engobj = new engineer("Asad");

// 03051720359
// nasir

// error handling

let a = 5;
let b = 6;
console.log("a =",a);
console.log("b =" ,b);
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
try{
    console.log("a-b = ",a-c); // error
} catch(err){
console.log(err);

}

console.log("a-b = ",a-b);
console.log("a-b = ",a-b);
console.log("a-b = ",a-b);
console.log("a+b = ",a+b);

























































































































































 













































































































































 

