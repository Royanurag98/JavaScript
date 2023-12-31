let x= 40;
let y= 3;
const z=32;

/*1 JavaScript Unary operator
    Operator require operands to perform its operation. Unary operators are those, 
    which takes one operand to perform its task.
      + , - , ++, - -, sizeof()
Working of 
Pre-increment (++x) :-  first increase the value of b   then  assign.
Post-increment(x++) :-  first assign in a then increase  the value of b*/
console.log("x= :",x);   // 40
console.log("x= :",++x); // 41
console.log("x= :",x++); // 41
console.log("x= :",--x); // 41
console.log("x= :",x--); // 41
console.log("x= :",x);   // 40
/*Unary Sizeof() 
typeof() operator is used to evaluate the size of data type, variable or constant.*/

console.log(typeof(let));
console.log(typeof(x));
console.log(typeof(32));

console.log("\n\n");
// JavaScript Arithmetic Operators
console.log("Sum of x + y       :",x+y);
console.log("Subtract of x - y  :",x-y);
console.log("Multiplay of x * y :",x*y);
console.log("Division x / y     :",x/y);
console.log("Reminder of x % y  :",x%y);
console.log("Exponent of x* y  :",x**y);// Exponent opertor use to find  x to the power y.

console.log("\n\n");
// JavaScript Assignment Operators.
console.log("x=y  :",x=y);  // x= 3  //  x=y => x=y;
console.log("x+=y :",x+=y); // x= 6  // x+=y => x=x+y;
console.log("x-=y :",x-=y); // x= 3  // x-=y => x=x-y;
console.log("x*=y :",x*=y); // x= 9  // x*=y => x=x*y;
console.log("x/=y :",x/=y); // x= 3  // x/=y => x=x/y;
console.log("x%=y :",x%=y); // x= 0  // x%=y => x=x%y;
console.log("x**=y:",x**=y);// x= 0  // x**=y => x=x**y;

console.log("\n\n");
//JavaScript Comparison Operators
/* == check only the value if both value are equal gives true.
But === check  the value as well as type of value if both value are equal gives true
 otherwise false*/
let m=6;
let n=6;
console.log("m==n",m==n);  // true
console.log("m===n",m===n);// truee 
console.log("m!=n",m!=n);  // false
console.log("m!==n",m!==n);// false

console.log("\n");
let p=6;
let q="6";
console.log("p==q",p==q);   // true
console.log("p===q",p===q); // false
console.log("p!=q",p!=q);   // false
console.log("p!==q",p!==q); // true




