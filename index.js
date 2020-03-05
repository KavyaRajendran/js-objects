//object creation with braces

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

//Object call
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

/*----------------------------------------------------------------*/
/*function Book (type, author) {
    this.type = type;
    this.author = author;
    this.getDetails = function () {
        return this.type + " written by " + this.author;
    }
}
var book = new Book("Fiction", "Peter King");
alert(book.getDetails()); */

name = prompt("Enter name");
mark1 = prompt("Enter mark1");
mark2 = prompt("Enter mark2");
mark3 = prompt("Enter mark3");
 var details = new Details(name,mark1,mark2,mark3);
    console.log(details.getDetails());
    function Details(name,mark1,mark2,mark3) {
        this.name=name;
        this.mark1=mark1;
        this.mark2=mark2;
        this.mark3=mark3;
        this.getDetails = function() {
          return {name:this.name,mark1:this.mark1,mark:this.mark2,mark3:this.mark3};
        }
        }



       
    /*
 setName:function() {
        return this.name;
 },
 setMark1:function() {
    return this.mark1;
},
setMark2:function() {
    return this.mark2;
},
setMark3:function() {
    return this.mark3;
}
    }
    var details = new details(prompt1,prompt2,prompt3,prompt4);
    console.log(details);
    */


