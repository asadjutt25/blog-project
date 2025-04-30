function myfunction(){
    console.log("Welcome to function");
    console.log(" i created my first function");
    console.log("Welcome to function");
    console.log(" i created my first function");
}

myfunction();

function sum(x,y){
    s= x+y;
    console.log("before return");
    return s;
console.log(x+y);
}
let val = sum(4,5);
console.log(val);

//sum1 functio 
function sum1(a,b){
    return a+b;
}
//morden js
const arrowsum=(a,b) => {
    console.log(a+b)
    
};

// mult function
function mult(a,b){
    return a*b;
}
// arrow function of multi
const arrowmulti =(a,b)=>{
    console.log(a*b); 
};