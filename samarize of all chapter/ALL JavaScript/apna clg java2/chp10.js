
// Object 
/*const student = {
    fullName : "Asad Shabbir",
    marks : 67.5,
    printMarks : function () {
        console.log("marks = ", this.marks);
        
    }
};
const employee = {
    calctext(){
        console.log("text rate is 10%");
         }
};
const MSultan1 = {
salary: 50000,
  calctext(){
        console.log("text rate is 20%");
         }
};*/

/*MSultan2.__proto__=employee;
const MSultan2 = {
salary: 50000,
};
const MSultan3 = {
salary: 50000,
};
const MSultan4 = {
salary: 50000,
};
const MSultan5 = {
salary: 50000,
};*/

// MSultan1.__proto__=employee;

/*MSultan2.__proto__=employee;
MSultan3.__proto__=employee;
MSultan4.__proto__=employee;
MSultan5.__proto__=employee;*/

// classes

/*(class toyotacar {
    constructor(brand , mileage){
        console.log("creating new object");
        this.brand = brand;
         this.mileage = mileage;
    }
    start(){
        console.log("start");
        }
        stop(){
            console.log("stop");
            
        }
} 
let fortuner = new  toyotacar("fortuner" , 10);
console.log(fortuner);
let lexus = new  toyotacar("lexus", 12);
console.log(lexus);


// inharitance 

class parent {
    hello(){
    console.log("hello"); 
    }
}
class child extends parent{}
let obj = new child();

class person {
    constructor(name){
        this.species = "homo species"
        this.name = name;
    }
    eat(){
        console.log("eat");  
    }
}
class engineer extends person {
    constructor(name){ 
        super(name);    // to invock parent class constractor
        
    }
   work() {
          super.eat();
        console.log("soloves problems, build something");
        }
  
}

let engobj = new engineer ("sultan");



// super key word */






// practice question 

// question no: 1
let Data= "secret information"
class user {
    constructor(name, email){
        this.name=name;
this.email = email;
    }
viewDate(){
    console.log("data=", Data);   
}
}

let student1 = new user("Asad", "ABC@email.com");
let student2= new user("Kamaran", "kim@email.com");
let teacher1 = new user("ali", "ali@college.com");
