// Now let's dive into basics


// Variables done
// operators done
// conditionals next

//There is arithmatic operator, assignment operator and comparision operator


/*
1. Arithmetic Operators: 
Perform mathematical operations, such as addition (+), subtraction (-), multiplication (*),
 division (/), modulus (%), and exponentiation (**). For example: 
 */
 let result = 5 + 3;
 console.log(result);

 /*
2. Assignment Operators:  
Assign a value to a variable. 
For instance: 
*/
let x = 5; //uses the assignment operator (=).
console.log(x);

/*
3. Comparison Operators: 
Compare two operands, returning a boolean value (true or false). Examples include:
Equality: == or === (strict equality)
Inequality: != or !== (strict inequality)
Greater than: > or >=
Less than: < or <=
Identical: === (checks both value and type)
Not identical: !== (checks both value and type)
For example: 
*/
if (x > 5) { 
    console.log("x is greater than 5"); 
}
console.log(x=="5");
console.log(x==="5");
console.log(x!="5");
console.log(x!=="5");
console.log(x<5);
console.log(x<=5);
/*
4. Logical Operators: 
Manipulate boolean values. Examples include:
AND (&&): returns true if both operands are true
OR (||): returns true if at least one operand is true
NOT (!): inverts the truthiness of the operand
For example: 
*/

let isAdmin = true; 
let hasPermission = false; 
if (isAdmin && hasPermission) { 
        console.log("User has admin privileges"); 
    }

/*

5.Conditional Operator (also known as the ternary operator):
 A shorthand for simple if-else statements. Syntax: condition ? true-value : false-value. 
 For example: 
*/
 let message = (isAdmin) ? "You are an admin" : "You are not an admin";
