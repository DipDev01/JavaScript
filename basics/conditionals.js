// If, else if, else condtions

let x = 5; // Declares a variable named 'x' and assigns it the value 5

if (x > 5) { // Checks if the value of 'x' is greater than 5
  console.log(`${x} is greater than 5`); // If true, prints "x is greater than 5" to the console
} 
else if (x == 5) { // Checks if the value of 'x' is equal to 5
  console.log(`${x} is equals to 5`); // If true, prints "x is equals to 5" to the console
} 
else { // If neither of the above conditions is true
  console.log(`${x} is smaller than 5`); // Prints "x is smaller than 5" to the console
}


// Switch condition

let day = "lskdf"

switch (day) {
    case "sunday":
        console.log(`${day} is meeting in the office`);
        break;
    case "monday":
        console.log(`${day} is my birthday`);

        //>>>>>tuesday,wednesday tasks...
    default:
        if(day==="saturday"){
            console.log("Holiday");
        }
        else{
            console.log("Enter only sunday-saturday")
        }
        break;
}
