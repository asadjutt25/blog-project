let marks =[23,43,45,66,65,34]
console.log(marks);
let heroes =["asad","kamran","ali","wajeed","aslam","akram"]
console.log(heroes);
// for loop
for(let idx=0; idx<heroes.length;idx++){
    console.log(heroes[idx]);   
}
//for of
for(let hero of heroes){
    console.log(hero);  
}
// for of
let cities=["vehari","lhr"]
for(let city of cities ){
    console.log(city.toUpperCase()); 
}
let mark=[85,97,44,37,76,60]
let sum =0;
for(let val of mark)
{
    sum +=val;
}
console.log(sum);
let avg = sum / mark.length;
console.log(avg);

console.log(`avg mark of this class = ${avg}`);

let items = [24,23,32,33,22,23]
let idx=0;
for(let val of items){
    console.log(`value at index ${idx} = ${val}`);
    let offer = val/10;
    items[idx]=items[idx]-offer;
    console.log(`value after 10% offer = ${items[idx]}`);
   idx++;
}
for (let vel1 of items){
    console.log(vel1);
}
let fooditem = ["potato","apple","lichi","alo","batyou","tendea"]
fooditem.push("chai");
let del=fooditem.pop("apple");
for(let fd of fooditem)
console.log(fd);
console.log(`delected item = ${del}`);

let asad=items.concat(fooditem);
console.log(`concat of item and fooditem = ${asad}`);

console.log(fooditem.slice(1,4));

let arr=[1,2,3,4,5,6]
arr.splice(2,2,101,102);
// add element
arr.splice(1,0,23);
// delect element
arr.splice(1,1);
//lets practice

let array=["bloomberg","microsoft","uber","google","ibm","netflix"]

array.shift()
array.splice(2,1,"ola")
array.splice(6,0,"amazon")
array.push("asad")
console.log(array);


