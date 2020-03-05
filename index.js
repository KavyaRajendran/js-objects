//creation of objects

const obj = {
  Firstname:"Kavya",         //setting keys & values
  Lastname:"Rajendran",
  ID:48,
  Email:"kavya@gmail.com",
  Dept:"ECE",
  College:"SECE",
  //Getting name from object
  getFName:function() {
      return this.Firstname;
  },
   setFName:function(firstname) {
      return this.Firstname=firstname;
  },
   getLName:function() {
      return this.Lastname;
  },
  //passing arguments for setting lastname
   setLName:function(lastname) {
      return this.Lastname=lastname;
  },
    getID:function() {
      return this.ID;
  },
   setID:function(id) {
      return this.ID=id;
  },
    getEmail:function() {
      return this.Email;
  },
   setEmail:function(email) {
      return this.Email=email;
  },
    getDept:function() {
      return this.Dept;
  },
   setDept:function(dept) {
      return this.Dept=dept;
  },
   getCollege:function() {
      return this.College;
  },
   setCollege:function(college) {
      return this.College=college;
  }
}

let Firstname = obj.getFName();
console.log("Firstname:",Firstname);
Firstname = obj.setFName("Kaviya");
console.log("Firstname:",Firstname);

let Lastname = obj.getLName();
console.log("Lastname:",Lastname);
Lastname = obj.setLName("Mano");
console.log("Firstname:",Lastname);

let ID = obj.getID();
console.log("ID:",ID);
let ID = obj.setID(52);
console.log("ID:",ID);

let Dept = obj.getDept();
console.log("Dept:",Dept);
Dept = obj.setDept('CSE');
console.log("Dept:",Dept);

let Email = obj.getEmail();
console.log("Email:",Email);
let Email = obj.setEmail("kaviya@gmail.com");
console.log("Email:",Email);

let College = obj.getCollege();
console.log("College:",College);
let College = obj.setCollege("Sri Eshwar");
console.log("College:",College);
