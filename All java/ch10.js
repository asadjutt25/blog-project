// const student = {
//  fullName: " Asad shabbir",
//  marks: 94.3,
//  printMarks: function (){
//     console.log("marks = ", this.marks);
    
//  },
// };

const employee = {

 calcTax (){
    console.log("tax rate is 10%");
 },
};

const asad1 = {
    salary: 500000,
};
const asad2 = {
    salary: 500000,
};
const asad3
 = {
    salary: 500000,
};
const asad4 = {
    salary: 500000,
    calcTax (){
    console.log("tax rate is 100%");
    },
};


asad1.__proto__= employee;
asad2.__proto__= employee;
asad3.__proto__= employee;
asad4.__proto__= employee;



class ToyotaCar {
start() {
    console.log("start");
}
stop() {
    console.log("stop");
    
}
};
 let fortuner = new ToyotaCar();

