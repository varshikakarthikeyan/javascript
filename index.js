//task1
var number=13;
var name='js';
var iscloudy=true;
console.log(number+ " "+name+ " " +iscloudy);
document.write(number);
document.write(name);
document.write(iscloudy);

//task2
console.log(typeof(num));
console.log(typeof(name));
console.log(typeof(iscloudy));

//task3
var number1=parseInt(prompt("Enter the first value"));
var number2=parseInt(prompt("Enter the second value"));
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
//task4
const num1 = parseInt(prompt("enter the first number:"));
const num2 = parseInt(prompt("enter the second number:"));
const sum = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
let quotient;
let remainder;
if (num2 !== 0) {
  quotient = num1 / num2;
  remainder = num1 % num2;
} else {
  quotient = "cannot divide by zero";
  remainder = "cannot divide by zero";
}
console.log("Addition:", sum);
console.log("Subtraction:", sub);
console.log("Multiplication:", mul);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
