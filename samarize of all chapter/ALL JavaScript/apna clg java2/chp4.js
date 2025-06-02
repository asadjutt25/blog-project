// Arrays in js 
let marks = [ 97, 87, 67,57, 47,37 ]
console.log(marks);
console.log(marks.length);
let heroes = ["Kamran", "Asad", "Faisal", "Ramzan"]
console.log(heroes);
console.log(typeof heroes);
console.log(heroes[3]);
let heroe = [ "Sultan", "Kamran", "Asad", "Faisal", "Ramzan"]
for ( let idx=0; idx < heroe.length; idx++){
    console.log( heroe[idx]);
}


//for of
let hero = ["Abdul-Rahem", "Sultan", "Kamran", "Asad", "Faisal", "Ramzan"]
for (let el of hero){
    console.log(el);  
}
let cites =["lahour", "multan"," karachi","quatta","pashawer"];
for(let city of cites){
    console.log(city.toUpperCase());
}


// practies 
// question no 1:-
let mark = [85,97,44,37,76,60];
let sum = 0;
for (let val of mark){
    console.log(val);
    sum +=val
}
let avg=sum/mark.length
console.log(`avg marks of the class = ${avg}`);
// Question no 2:-

// let items = [250, 645, 300, 900, 50];
// let i=0;
// for (let val1 of items ){
//     console.log(`value at index ${i} = ${val1}`);
//     let offer = val1/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++; 
// }
let items = [250, 645, 300, 900, 50];
for (let j=0; j < items.length ; j++){
    let offer = items[j] / 10;
    items [j] -= offer;
}
console.log(items);


// Array Methods


 let fooditems = ["potato" , "apple" , "litchi" , "tomato"];
console.log(fooditems);
console.log(fooditems.toString());
// let deleteditem= fooditems.pop()
// console.log(fooditems);
// console.log("deleted",deleteditem);
              
let hemarverlheroes= ["aneek wala jin", "spider man","thor ","iroman"];
let dcheroes = [ "super man","batman"]
pakheros=["Asad","kamran"]
let heroess=hemarverlheroes.concat(dcheroes,pakheros);
console.log(heroess);

// shift & unshift

let turkishheroes= ["aneek wala jin", "spider man","thor ","iroman"];
turkishheroes.unshift("sultan");
let value =turkishheroes.shift();
console.log("deleted", "spider man");

// slice & splice 
let turkishheroe= ["aneek wala jin", "spider man","thor ","iroman", "sultan","Asda","Kamran"];
console.log(turkishheroe);
console.log(turkishheroe.slice(1,5));
let arr = [1, 2,3,4,5,6,7,8,9,10];
// arr.splice(2, 2, 101,102)
//add 1 element
// arr.splice(2,0,104);

// deleted 1 element
// arr.splice( 3,1)
// Replace the element
arr.splice(3,1,105)
console.log(arr)

// practices set 
let companies = ["bloomberg","Microsoft","Uber","Google","IBM","Netfliex"]
// companies.shift()
companies.splice(2,1,"ola");
companies.push("Amazon")
console.log(companies);
