// 587525
console.log("hello world!");
//artimatic operator

let a=2;  
let b=9;
let z=3;
let x=5;
console.log("a =",a);
console.log("b =",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);
z--;
x++;
console.log("z--=",z);
console.log("x++=",x);

console.log("x++=",x--);
// applay postprix artimatic operator
console.log("x=",x);
//asignment operator
let e =3;
let f = 6;
e+=4;
console.log("e =",e);
//comparison operators
let k=2;
let l=8;
let g="8";
console.log("2==8",k==l);
console.log("2!=8",k!=l);
console.log("8==8",l===g);
console.log("2>=8",k>=g);
console.log("8<=8",l<=g);
//logical operators
let m=2;
let o=8;

let cond1 = m>o;
let cond2 = m<o;
console.log("cond1 && cond2",cond1 && cond2);
console.log("cond1 || cond2",cond1 || cond2);
console.log("!(cond1 || cond2)",!(cond1 || cond2));
console.log("!(o>m)",!(o>m));

// conditional statment

let age = 25;
if(age => 18) {
   console.log("you can vote"); 
}
if(age < 18) {
   console.log("you can not vote"); 
}

let mode ="light";
let color;
if(mode==="dark") {
   color ="black";
}
if(mode==="light") {
   color ="white";
}
console.log(color);



let mode1 ="day";
let color1;
if(mode1==="day") {
   color1 = "black";
} else{
   color1 = "light";
}
console.log(color1);
// if else
let num = 223;
if(num %2===0) {
   console.log(num,"is even");
   
} else{
   console.log(num,"is odd");
}
//if else if statment
 
let age1=600;
if(age1<18){
   console.log(age1,"you are junior student");
   } else if(age1<25) {
      console.log(age1,"you are senior student");
   } else {
      console.log(age1,"you are middle student"); 
   }
   
   let result = age1 >= 19 ?  "is adult" : " is not adult";
console.log(age1,result);































