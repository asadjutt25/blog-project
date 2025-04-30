for (let count = 1;count<=5; count++) {
    console.log("ASAD"); 
}
console.log("LOOP HAS ENDED");

// calculate sum of 1 to 10





let sum = 0;
for( let i=1; i<=5;i++){
    sum=sum+i;
}
console.log("sum =",sum);
 
for( let i=1; i<=5;i++){
    console.log("i =",i);
}
for( let i=1; i<=4;i++){
    console.log("i =",i);
}
// while loop
let q = 1;
while(q<=7){
    console.log("q = ",q);
q++;
}
// do while loop
let m = 1;
do {
    console.log("apna college  ",m);
m++;
}while(m<=7);

// for of loop
let str = "goodman";
for(
    let z of str
)
 { // iternator -> characters
    console.log("for of loop is = ",z);
}

// for of loop with size
let st = "poorgirl";
let size=0;
for (let b of st)
 { // iternator -> characters
    console.log("for poorgirl = ",b);
    size++;
}
console.log("string size =",size);

let s = "badcat";
let length=0;
for (let c of s)
 { // iternator -> characters
    console.log("for = ",c);
    length++;
}
console.log("string size =",length);

//for in objects
let student = {
    name: "asad",
    age:23,
    cgpa:5.5,
    ispas:true,
};
for (let key in student){
    console.log("key = ",key);
    
}
//practice Qs1
for(let num=0; num<=50;num++){
    if( num%2==0 ){
        console.log("num = ",num);
    }
}
// practice q no2


let gamenum = 25 ;
let usernum = prompt("Guess the game number");
while(usernum != gamenum){ //game
   usernum = prompt(" you entered wrong number.Guess again : ");
}
console.log("congratulation,you entered the right number");
 // string

 
 
 

