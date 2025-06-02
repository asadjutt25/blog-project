// console.log("welcom to java practice");
// console.log(" i love java");
// fullname = "kamram"
// console.log(fullname);
// FULLNAME = ("JOHNY")
// console.log(FULLNAME);
// let name = "ali";
// let age = 45;
// console.log(age);
// let totalprice = 12000;
// console.log(totalprice);
// const price = 1200;
// console.log(price);
// const PI = 3.14;
// console.log(PI);
// let a;
// console.log(a);
// {
//     let a = 56;
//     console.log(a);

// }
//  Data types in js: NUMBER, String, Boolean, Undefined, Null, Bigint, Symbol. 
// let p = 25;
// console.log(p);
// console.log(typeof p);

// isfollow = true;
// console.log(isfollow);
// console.log(typeof isfollow);
// let i;
// console.log(i);
// console.log(typeof i);
// let x = null;
// console.log(x);
// console.log(typeof x);
// let z = BigInt("123")
// console.log(z);
// console.log(typeof z)
// let k = Symbol("hello!");
// console.log(k);
// console.log(typeof k);
// const student = {
//     name: "sultan",
//     age: 15,
//     CGPA: 4.94,
//     ISPASS: true,
// };
// console.log(student);
// console.log(typeof student);
// console.log(student["CGPA"]);
// student["age"] =student["age"] + 1;
// console.log(student.age);
// practics 1st chapter 
// const  product = {
//     title:"Ball Pen",
//     ratting:4,
//     offer:5,
//     price:300,
// };
// console.log(product);

// const profile = {
//     username:"Ramzan",
//     isfollow:false,
//     followers:1234,
//     following:112,
// };
// console.log(profile);
// console.log( typeof profile);



// chapter 2 start from here: 



// console.log("hello world");
// console.log("hello chapter 2");


// operater in js 
/*
Arithimatatic operater 
let m = 5;
let n = 2;
console.log("m =", m, " & n =",n );
console.log("m+n=", m+n);
console.log("m-n=", m-n);
console.log("m/n=", m/n);
console.log("m*n=", m*n);
console.log("m%n=", m%n);
console.log("m**n=", m**n);*/

// unary operater 
/*
 postincrement 
let m = 5;
 let n = 2;
 console.log("m =", m, " & n =",n );
 m++,
// m=m+1;
console.log("m=", m);*/

/* postdecrement 
let m = 5;
 let n = 2;
 console.log("m =", m, " & n =",n );
 m--,
// m=m-1;
console.log("m=", m);
*/
/* 
// preincrement 
let m = 5;
 let n = 2;
 console.log("m =", m, " & n =",n );
// console.log("++m=", ++m);
console.log("m++=", m++);
console.log("m=", m);*/
/*
// prederement 
let m = 5;
 let n = 2;
 console.log("m =", m, " & n =",n );
console.log("--m=", --m);
/* console.log("m--=", m--);
console.log("m=", m);*/


// assignment opreater 

// let a = 5;
// let b = 2;
// a += 4;              // a= a+4
// console.log("a =", a);
// let a = 5;
// let b = 2;
// a -= 4;              // a= a-4
// console.log("a =", a);
// let a = 5;
// let b = 2;
// a *= 4;              // a= a*4
// console.log("a =", a);
// let a = 5;
// let b = 2;
// a /= 4;            // a= a/4
// console.log("a =", a);
// let a = 5;
// let b = 2;
// a %= 4;          // a= a%4
// console.log("a =", a);
// let a = 5;
// let b = 2;
// a **= 4;     // a= a**4
// console.log("a =", a);

// comparison operater
/*
let a = 5;
let b = 2;
console.log(" a==b", a==b);
console.log(" a==a", a==a);
console.log(" a!=b", a!=b);
console.log(" a!=a", a!=a);
*/
//let a = 5;
// let b = "5";
// console.log(" a===b", a===b);
// let a = 5;
//  let b = "5";
//  console.log(" a>b", a>b);
// let c = 7;
// let d = 6;
// console.log("c > d", c > d);
// let c = 7;
// let d = 6;
//  console.log("c < d", c < d);
// let c = 7;
// let d = 6;
// console.log("c <= d", c <= d);
// let a = 5;
//  let b = 5;
//   console.log(" a<=b", a<=b);

// logical operater 

let a = 6;
let b = 5;

// let cond1 = a>b;
// let cond2 = a===6;
console.log("cond1 && cond2=", a === 6, a > b);
console.log("cond1 || cond2=", a === 6 || a > b);
console.log("!(a>b)=", !(a > b));
console.log("!(6<5)=", !(a < b));


// condational statement

// if statement

/*let mode = "dlight"
let color;
if (mode === "dark") {
    color = "black"
}
else{
 color = "whhite"
}*/
/*console.log(color);
if (mode === "night") {
   
}*/


 /*let age = 16;
if (age >= 18) {
    console.log(" you can vote");
}
if (age < 18) {
    console.log(" you cannot vote");
}*/


/*let age = 25;
if (age>=18){
    console.log("vote");
} else {
    console.log("not vote");  
}*/

// even or odd 

let num = 10;
if (num%2===0){
    console.log( num," is even");
} else{
    console.log( num , "is odd");
    
}
let n = 7;
if (n%2===0){
    console.log( n," is even");
} else{
    console.log( n , "is odd");
    
}


// else-if statement 

let mode = "dark";
let color;
if(mode === "dark"){
    color = "black"
} else if (mode==="blus"){
    color = " blue"
} else if (mode===pink){
    color = " pink"
} else{
    color= "white"
}
console.log(color);


// ternary operators 


let age = 25;
 let result = age >=18? "aduit" : "not aduit";
 console.log(result);
 let m =16;
 m>=18? console.log("idiot"): console.log(" not idiot");


//  practics of chapter 2 
// question 1st 

 let numb=prompt("Enter a number");
 if (numb%5===0){
    console.log( numb ,"is a  multiple of 5" );
 } else{
    console.log( numb ,"is not  multiple of 5" );
 }

// question 2nd
 let score = 75;
 let grade;
 if (score >= 90 && score <=100){
    grade= "A";
 } else if (score >= 70 && score <=89){
    grade= "B";
 }  else if (score >= 60 && score <=69){
    grade= "C";
 }  else if (score >= 50 && score <=59){
    grade= "D";
 }  else if (score >= 0 && score <=49){
    grade= "F";
 }
 console.log(" According to your score, your grade was:" , grade);
 
