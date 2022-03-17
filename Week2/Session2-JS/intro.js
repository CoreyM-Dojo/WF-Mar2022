// console.log() is used to print data to teh console/terminal
console.log("Hello and welcome to your first javascript experience!");

// Variables 

// use the var keyword to tell the interpreter that you are declaring a variable
var num;
// You can also set it equal to a value as you declare it. using the var keyword on an already declared variable will redeclare that variable
var num = 10;

// Variables can hold any data type!!!

// Strings - Text based data surrounded in quotes
var fname = "Corey"

// You can then reassign the value of a variable without using var
fname = 'Casey' // You can use either single or double quotes for a string

// Numbers
var a = 5
var b = 10 // This is a Number
var c ="100" // This is a String - The quotes are what make it so

// Math
console.log("Addition",a+b) // Math is performed normally as written
console.log("Subtraction",b-a) // Math is performed normally as written
console.log("Multiplication", a*b) // Math is performed normally as written
console.log("Division", b/a) // Math is performed normally as written

// Booleans
var boolean = true  // case matters
boolean = false
boolean = !boolean // You can make a boolean always its opposite with this setup! Booleans are only true or false

// Playing with strings

var fname = "Corey"
var lname = "Mckeel"
// String concatenation -> This can be done using the + operator
var fullname = fname + " " + lname // Notice the string with empty space in the center. This adds the space between the two names

// String Interpolation -> Used to insert variables directly into strings
var fullname = `${fname} ${lname}` // No empty space string needed
var isHungry = true
var foodNum = 0
// You can insert any variable
console.log(`It is ${isHungry} that ${fullname} has had ${foodNum} meals today.`)
// String concatenation will automatically make a number into a string before combining
console.log("Keep it " + 100)

// Functions
function myFunction() {
    // This is what the function does
    console.log("Hello World")
}

// You can also add arguments to the function
function add(a,b) {
    // a is argument 1
    // b is argument 2
    console.log(a+b)
}

// A function will not run if it is not invoked or called
myFunction() // The () is what calls or invokes the function. It is required 

// The point of functions is to be able to pass different data into in order to perform its FUNCTION
add(6,4) // The () is what calls or invokes the function. It is required (In this instance a = 6, b = 4)
add(8,20) // The () is what calls or invokes the function. It is required (In this instance a = 8, b = 20)
add(5,-11) // The () is what calls or invokes the function. It is required (In this instance a = 5, b = -11)

// Returns

// Currently we are using console.log() to display the answer, but what if we wanted to use the result of the function somewhere else? 
var percentage = ""
function avg(a,b,c,d,e) {
    // We use a return statement to give value to a function
    return (a+b+c+d+e)/5 // Yes js takes into account order of operations
}

console.log(avg(2,4,6,8,10)) // The console.log() is needed in this case

var average = avg(2,4,6,8,10) // You can now assign the return value of the function to a variable
console.log("The average of the first 5 even numbers is " + average);
average = avg(1,3,5,7,9) // You can now assign the return value of the function to a variable
console.log("The average of the first 5 odd numbers is " + average);








