let input_name = prompt("Please enter your name");
let num1 = +prompt("Please enter the first number");
let num2 = +prompt("Please enter the second number");

let sum = num1 + num2;
let sub = num1 - num2;
let div = num1 / num2;
let mul = num1 * num2;
let rem = num1 % num2;

Swal.fire ("Thanks for your input \n Here is the result")
// Swal.fire("Hello Mr. " + name + ", the sum of " + num1 + " and " + num2 + " is: " + sum);
// Swal.fire("Hello Mr. " + name + ", the subtraction of " + num1 + " from " + num2 + " is: " + sub);
// Swal.fire("Hello Mr. " + name + ", the division of " + num1 + " by " + num2 + " is: " +div);
// Swal.fire("Hello Mr. " + name + ", the multiplication of " + num1 + " and " + num2 + " is: " + mul);
// Swal.fire("Hello Mr. " + name + ", Remainder of " + num1 + " and " + num2 + " is: " + rem);

document.write("Hello Mr. " + input_name + ", the sum of " + num1 + " and " + num2 + " is: " + sum + "<br/>");
document.write("Hello Mr. " + input_name + ", the subtraction of " + num1 + " from " + num2 + " is: " + sub + "<br/>");
document.write("Hello Mr. " + input_name + ", the division of " + num1 + " by " + num2 + " is: " + div + "<br/>");
document.write("Hello Mr. " + input_name + ", the multiplication of " + num1 + " and " + num2 + " is: " + mul + "<br/>");
document.write("Hello Mr. " + input_name + ", Remainder of " + num1 + " and " + num2 + " is: " + rem + "<br/>");
