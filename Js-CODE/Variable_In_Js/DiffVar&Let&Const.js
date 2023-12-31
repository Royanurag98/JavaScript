var myName="Anurag";// Declare and initilized with var keyword 
var myName="Priti"; // Re-declare and initilized with same variable name 
myName="Kavita";    // Re-assign the value.in same variable name
console.log(myName);

let roll_number=56; // Declare and initilized  with let keyword 
//let roll_number=76; // Can not  re-declare and initilized with same variable 
roll_number=45;    // here we can also re-assign the value.in same variable name
console.log(roll_number);

const registration_number=12213393; // Declare and initilized the valu with const keyword 
//const gistration_number=76; // here we can not again declare and initilized with same variable and same data type
//gistration_number=12213347;  // here we can not re-assign the value.in same variable name.
console.log(registration_number);

/* Var is globally scoped while let and const are blocked scoped.*/
 var course_name="bca";
 {
    var course_name="mca"; //scoped of var all over the program(globally). 
    console.log(course_name);
 }
 console.log(course_name);

 let subject_name="JavaScript";
 {
    let subject_name="c++"; //Sope of let inside the block we can not access outside the block. 
    console.log(subject_name);
 }
 console.log(subject_name);

 //var  and let variable initialized with undefined whereas const variable are not Initialized with undefined.
 var Game;
 console.log(Game);
 let animals;
 console.log(animals);

 // const must be initialized during the declaration of  variable.
 const god="RAm";
 console.log(god);


