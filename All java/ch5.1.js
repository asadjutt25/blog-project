
let arr = [2,3,4,5,6,7,"asad"];
arr.forEach(function printval(val){
    console.log(val*val);
});

let arra = ["dasa","sad","asaddsa","asad"];
arra.forEach((val,idx,arra)=>{
    console.log(val.toUpperCase(),idx,arra);
});

//for using map
let num = [2,3,4,5,6,7];
num.map((val) => {
    console.log(val);
});
let newarr =num.map((val) => {
return val*val
});
console.log(newarr);
// filter array of even and odd greater
let numb =[2,3,4,5,66,7,7,5,432,2,1,1]
let evennumb = numb.filter((val) => {
return val %2 ===0;
});
let oddnumb = numb.filter((val) => {
    return val %2 !==0;
    });
    let greaternumb = numb.filter((val) => {
        return val >50;
        });
console.log(evennumb);
console.log(oddnumb);
console.log(greaternumb);

// reduce array function

let numbe = [2,2,3,4,56,6,7,765,4,3,2,3,5,6];

const output = numbe.reduce((prev,curr) => {
    return prev+curr;
});
console.log(output,"this is the sum of values in the reduce array");
// reduce condition who is greater
const output1 = numbe.reduce((prev,curr) => {
    return prev>curr?prev:curr;
});
console.log(output1,"this is greater value in the reduce array");
// reduce condition who is smaller
const output2 = numbe.reduce((prev,curr) => {
    return prev<curr?prev:curr;
});
console.log(output2,"this is smaller value in the reduce array");

/// we are fiven array of marks of student , filter iut the marks of student the scords 90+...

let number = [85,96,4,90,98,96,94,73];
 let toppers = number.filter((val) => {
return val > 90;
 });
console.log(toppers,"practice Q no 1");


// TAKE A NUM N AS INPUT FEOM USER CREATE AN ARRAY OF NUMBER FEOM 1 TO N. USE THE REDUCE METHOD T CALCULATE SUM OF ALL NUMBERS IN THE ARRAY. USE THE REDUCE METHOD TO CALCULATE PRODUCT OF ALL NUMBERS IN THE ARRAY....

let n = prompt ("Enter a number : ");
let ar =[];
for (let i=1 ; i<=n ; i++){
    ar[i-1] = i ; // 1(0),2(1),3(2),4(3)...
}
console.log(ar);

const output3 = ar.reduce((prev,curr) => {
    return prev+curr;
});
console.log(output3 ,"sum of enter number by reduce method");

const factorial  = ar.reduce((prev,curr) => {
    return prev*curr;
});
console.log(factorial,"factorial of enter number by reduce method");




