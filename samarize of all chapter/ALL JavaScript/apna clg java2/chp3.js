console.log(" apna college");
// loops in js 

// 1: for loop
// prient 1 to 5
// for ( let j = 1;j<=5; j++){
//     console.log("j =", j);
// }

// calcuate sum of n numbers

 /*let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum+i;
}
console.log("sum = ",sum);

console.log(" loop has ended");*/

// 2: infinite loop

/*for ( let i = 1; i>=0; i++){
console.log( "i=",i);
}*/

// 3: while loop  
// let i = 1;
// while(i <= 5) {
//     console.log("i=",i);
//     i++;
// }

// 4: Do while loop

// let i = 1;
//  do {
//     console.log("i=",i);
//     i++;
// } while(i <= 10);

// 5(1):for-of loop 
// used for string & arrays 
/*let str = "javascript";
let size = 0;
for(let i of str ){
    console.log("i=", i);
   size++; 
}
console.log("string size =", size);/*

/*5(2): for-in loop:-
used foe objects */

// let student = {
//     Name:"Asad",
//     Age:25,
//     CGPA:7.8,
//     IsPass: true,
// };
// for (let key in student ) {
//     console.log("key=", key, "value=", student[key]);
    
// }



// practices set 

// question no 1:-
// for(let num=0; num<=100;num++){
//     if(num%2===0)
//         console.log("num=",num);
// } 

// question n0 2:-
// game
// let gamenum=25;
// let usernum = prompt("Guess the number:");
// // console.log(usernum);
// while(usernum !=  gamenum){
//     usernum = prompt(" you enter wrong number ,Guess again :");
// }
// console.log("congratualation, you entered the number");



// strings in javascript:-

// let str = "apna collage";
// let str2= 'Kamran'
// console.log(str2[0]);

// tamplate literals 

let obj = {
    item:"pen",
    price:10,
};
let output =` the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// console.log("the cost of",obj. item, "is", obj.price, "rupess");




let spicailstring = `this is a template literals`;
console.log( spicailstring);

let n0 = `this is a template literals ${1+2+3}`;
console.log(n0);

// template Literals 

console.log("apna\ncolleage");
console.log("apna\tcolleage");

let str3 = "apna\tcollege";
console.log(str3.length);


// string  Method 

let str4="you folishe"
 newstr=str4.toUpperCase()
console.log(str4);
console.log(newstr);

let str5="You ARe Folishe"
 newstrr=str5.toLowerCase()
console.log(str5);
console.log(newstrr);

let str6 = "     apna college      ";
console.log(str6.trim());

let tum=str5.concat(str6);
console.log(tum);

let str7 = "apna\tcollege";
console.log(str7.slice(1,9));

let tumh=str5+str7;
console.log(tumh);

let you = "hello";
console.log(you.replace("lo","p"));

let yoi= "ilovejs";
console.log(yoi.charAt(3));

let str8 = " iamstudent";
console.log(str8[6]);


// practices 
// question no 1:-

let fullname = prompt("Enter Your Name without Spaces");
let username="@"+ fullname+fullname.length;
console.log(username);
