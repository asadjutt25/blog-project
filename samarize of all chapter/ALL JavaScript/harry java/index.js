//1 way to print in javascript
// console.log("hello world");
//     alert("me");
// document.write( "this is document write"); 

//2 javascript console API
// console.log("hello world");
// console.warn("this is warning", 4 + 6, "Anotherlog");
// console.error("this is an error");


// 3 . javascript variables
// what is variables?--- containers to store data values
 /*var number1 = 34;
var number2 = 56;
console.log(number1+number2);

// 4. Data types in javascript
// Number 
var num1 = 433;
var num2 = 63.55;
// string 
var str1 = "this is string";
var str2 = "this is also a string";
// objects 
var marks = {
    ASAD:56,
    KAMARN:30,
    ALI:70,
    SULTAN:80,
}
console.log(marks);
// booleans 
var a = true;
var b = false;
console.log(a,b);

// var und = undefined;
var und ;
console.log(undefined)
// null 
var n = null;
console.log(n);

/*At a very high level , there are two types of data types in javascript.
1.primtive data types: undefined, null, number, string, boolean, symbol.
2.Raference data types: Arrays ,Objects
*/

// Array 
 /*var arr = [1,2, "bablo",3,4,5]
console.log(arr);
console.log(arr [0]);
console.log(arr [1]);
console.log(arr [2]);
console.log(arr [3]);
console.log(arr [4]);

// opraters in javascript 
//1: Arithimatic operaters
var c = 100;
var d = 10;
console.log("the value of c+d ",c+d);
console.log("the value of c-d ",c-d);
console.log("the value of c*d ",c*d);
console.log("the value of c/d ",c/d);

//2: Assignment Operator
var e = d;
// e += 2;
//  e -= 2;   //e = e - 2;
// e *= 2;
// e /= 2;
// console.log(e)

//3: comparision operater
// var x = 34;
// var y = 56;
/*console.log(x==y);
console.log(x<y);
console.log(x<=y);
console.log(x>y);
console.log(x>=y);*/

// 4:logical operater
// LOGICAL and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);
// LOGICAL OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);
// LOGICAL NOT
// console.log(!true);
// console.log(!false);
/*
// function in javascript
function avg(f,g){
    c = (f+g)/2;
    return c;
}

// Dry = Do not repeat yourself
c1 = avg (4 , 6);
c2 = avg (14 ,18);
// console.log(c1 , c2)


// conditional in javascript

var age = 41;
// single if statement
if ( age > 18){
    console.log('You can drink water');
}
// if-else statement
/*if ( age> 18){
    console.log('You can drink water');
}
else{
    console.log('You cannot drink water');
}*/

// if-else ladder
/*
age = 20;
if(age >32){
    console.log("You are not a kid");
}
else if ( age >26){
    console.log("NOW YOU ARE YONGER");
}
else if ( age >22){
    console.log(" 22 yes NOW YOU ARE YONGER");
}
else if ( age >29){
    console.log("NOW YOU ARE YONGER");
}
else if ( age >18){
    console.log(" 18 NOW YOU ARE YONGER");
}
else{
    console.log(" bachaian rahy")
}
console.log(" End of ladder")*/
