//Q NO 1 : YOU ARE CREATING WEBSITE FOR YOUR COLLEGE . CREATE A CLASS USER WITH 2 PROPERTIES , NAME & EMAIL . It also has a method called viewdata() that allow user to view wesite dtd .

let DATA = "secret data";
class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data =", DATA);  
    }
}

class Admin extends user {
    constructor(name, email) {
        super(name,email);
 }
    editData()
    { 
         DATA = "Some new value";
    }
}


let student1 = new user("Asad Shabbir","csdiashu@gmail.com");
let student2 = new user("Wajeed Aslam","csdiashu@gmail.com");
let student3 = new user("Awais Ali","csdiashu@gmail.com");
let student4 = new user("Ali Akram","csdiashu@gmail.com");
let student5 = new user("Afshan Aslam","csdiashu@gmail.com");
let teacher = new user("dean","dean723423098@gmai.com")


// Q no 2 : Create a new class called Admin which inherits from user .add a new method called editdata to admin that allows it to edit website data.....


let Admin1 = new Admin("dean","dean723423098@gmai.com")