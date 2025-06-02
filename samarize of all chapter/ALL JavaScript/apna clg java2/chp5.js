// function in js 
function myfunction(){
    console.log("welcom to apna college");
    console.log("we are learing the js");  
}
myfunction();
myfunction();

function yufunction(msg,n){
    // parameter -> input
console.log(msg);
}
yufunction("i love js")  //Argument
// function 2 -> numbers ,sum
function sum(a,b){
    // (a,b) function parameters are local variables -> block scope
    // console.log(a+b);
    s= a+b;
    console.log("before return");
     return s;
    //   console.log("after return");
}
let val= sum(9,10)
console.log(val);
function sub(x,y){
    console.log(x-y);
}
console.log(sub(45,23));


// Arrow function 
function um(c,d){
return c+d;
}
 const arrowsum=(c,d) =>{
    console.log(c+d);
}
console.log(arrowsum);

// muliplicaton function
function mul (c,d){
    return c*d;
}

const arrrowmul=(c,d)=>{
    console.log(c*d);
   
}
console.log(arrrowmul);
// practices set 
function countvowel(str){
    let count = 0;
    for(const char of str){
       if ( char ==="a"|| char ==="e"|| char ==="i"|| char ==="o"|| char ==="u")
        {
        count++;
       }  
    }
    console.log(count); 
   
}
console.log(countvowel("abcde"));
console.log(countvowel("apna college vehari"));


// question 2
const countvowe =(str)=>{
    let count = 0;
    for(const char of str){
       if ( char ==="a"|| char ==="e"|| char ==="i"|| char ==="o"|| char ==="u")
        {
        count++;
       }  
    }
    console.log(count);
}


// for each loop in arrays 
//   HOF/HOM
/*HIGHER ORDER FUNCTION /METHOD ->PARAMETERS/RETURN */


function uiw(){
    console.log("hello");
}

function myfuny(uiw){
    return uiw;
}


let arr =[1,2,3,4,5,6];
arr.forEach(function printval(val){
    console.log(val);
    
}
);

let arrw =["pakistab","multan","lahour","lodrah"];
arrw.forEach((valp, idx , arr) => {
    console.log(valp.toUpperCase(), idx ,arr);}
);
// Pratices?
// 1st method 
let nums = [1,2,3,4,5,6,7,876,906,4563];
nums.forEach((nums)=>{
    console.log(nums*nums);
    
})
// 2nd method 
let numse = [2,3,4,5,6,7,876,906,4563];
let calcsqure=(numse)=>{
    console.log(numse*numse);
    };
numse.forEach(calcsqure)


// Array Methods 
// 1st Map 
let numsew = [1,2,3,4,5,6,7,876,906];
numsew.map(valo=>{
    console.log(valo);
    
})

let numsewe = [1,2,3,4];
let newarr = numsewe.map(valo=>{
    return val*2;
    })
    console.log(newarr);


    // 2nd filter 

    let arrr =[3,2,1,4];
    let evenarr= arrr.filter((val)=>{
        return val % 2 === 0;
    });
    console.log(evenarr);//[2,4]


        let ar =[3,2,1,4,,7,8,9];
    let odarr= ar.filter((vall)=>{
        return vall % 2 !== 0;
    });
    console.log(odarr); //[3,1,7,9]

       let are =[3,2,1,4,,7,8,9];
    let odarre= are.filter((valle)=>{
        return valle > 5 ;
    });
    console.log(odarre); //[7,8,9]

    // 3rd reduse Method 

let arre = [1,2,3,4,5,6,7,8];

 const output = arre.reduce((res,curr)=>{
    return res + curr;
})
console.log(output); //36

let arree = [1,2,3,4,5,6,7,8];

 const outpute = arree.reduce((res,curr)=>{
    return res > curr ? res:curr;
})
console.log(outpute); //8

let aree = [1,2,3,4,5,6,7,8];

 const otpute = aree.reduce((res,curr)=>{
    return res < curr ? res:curr;
})
console.log(otpute); //1

// practices set 

// question n0:1 

let marks = [97 ,64,32,49,50,59 ,70 ,80];
 let newarre =marks.filter((val)=>{ 
    return val>90;
})
console.log(newarre); //97

// question n0 :2
let n = prompt("enter a number:");
let arer=[];
for (let i=1; i<=n; i++){
    arer[i-1] =i;  //1(0),2(1),3(2),4(3)
}
console.log(arer);
 let dum = arer.reduce ((pre,curr)=>{
    return pre+curr;
})
console.log ( "sum =",dum);

 let Factorial = arer.reduce ((pre,curr)=>{
    return pre*curr;
})
console.log ( "Factorial =",Factorial);

