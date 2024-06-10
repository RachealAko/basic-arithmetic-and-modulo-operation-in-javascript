// basic operation
var addition = 2 + 2;
var subtraction = 2 - 2;
var multiplication = 2 * 2;
var division = 2 / 2;
var modulus = 2 % 2;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulus);

// presidence: this is a rule also called BODMAS.
// this rule means that mathimatical operation should be performed in this order in order to prevent ambiguity
// B = bracket: this means that operations in a brackets should be solved first
// O = of: this means any operation with of should be solve next after the ones in the brackets. note that of also means to multiply.
// D = division: this means that the divide operations should be solved next after the of operation
// M = multiplication: this means that the multiplication operations should be solved next after the division operation
// A = addition: this means that the addition operations should be solved next after the multiplication operation
// S = subtraction: this means that the subtraction operations should be solved next after the addition operation

// for example
var cost = 3 + (5*2);
var dogAge = (7 - 2) * 4 + 21 / 6;
console.log(cost);
console.log(dogAge);

// example 2
var dogAge = prompt("Enter your dog's age");
var humanAge = ((dogAge - 2) * 4) + 21;

alert("You are " + humanAge + " years old.")
console.log(humanAge);