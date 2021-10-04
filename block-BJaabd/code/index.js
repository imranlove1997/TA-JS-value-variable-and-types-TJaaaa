// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let userAge = Number(prompt("What is your age?"));
if (userAge >= 12 && userAge <= 55) {
  alert("You can participate in the marathon.");
}
else if (userAge >= 4 && userAge <= 11) {
  alert("You are too young to participate in the marathon.");
}
else if (userAge < 4) {
  alert("Hey Kiddo! Can You Walk?");
}
else if (userAge > 55) {
  alert("You are too old to participate in the marathon.");
}
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let repeat = "";
for(let n = +prompt(`Enter number of repeat 'n'`);
   n >= 1;
   n--) {
  let value ="e";
  repeat += value;
}
console.log(`h${repeat}llo`);
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let num = Number(prompt("Enter a number"));
let sum = 0;
for(let i =1; i <= num; i++) {
  sum += 1;
}
alert(`Number is ${sum}`);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let numValue = Number(prompt("Enter a any number."));
switch(numValue) {
  case 1:
    alert(`ONE`);
    break;
    case 2:
    alert(`TWO`);
    break;
    case 3:
    alert(`THREE`);
    break;
    case 4:
    alert(`FOUR`);
    break;
    case 5:
    alert(`FIVE`);
    break;
    case 6:
    alert(`SIX`);
    break;
    case 7:
    alert(`SEVEN`);
    break;
    case 8:
    alert(`EIGHT`);
    break;
    case 9:
    alert(`NINE`);
    break;
    case 10:
    alert(`TEN`);
    break;
    default:
      alert(`Please Try again.`)
}
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/
// [Your code goes here]
let mark = Number(prompt("Enter Your Marks"));
switch(true) {
  case mark > 90:
    alert('AA');
    break;
    case mark > 80 && mark <= 90:
      alert(`AB`);
      break;
      case mark > 70 && mark <= 80:
      alert(`BB`);
      break;
      case mark > 60 && mark <= 70:
        alert(`BC`);
        break;
        case mark > 50 && mark >= 60:
          alert(`CC`);
          break;
          case mark > 40 && mark <= 50:
            alert(`CD`);
            break;
            case mark > 30 && mark <= 40:
              alert(`DD`);
              break;
              case mark <= 30:
                alert(`FF`);
                break;
                default:
                  alert(`Enter valid number`);
}
/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let largeNum1 = Number(prompt("Enter first number"));
let largeNum2 = Number(prompt("Enter second number"));
if (largeNum1 > largeNum2) {
  alert(`The first number is larger number ${largeNum1} `);
}
else {
  alert(`The second number is lager number ${largeNum2}`);
}
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
let firstNum = Number(prompt("enter first number"));
let secondNum = Number(prompt("enter second number"));
let thirdNum = Number(prompt("Enter third number"));
let totalNum = firstNum + secondNum + thirdNum;
if (totalNum > 0) {
  alert(`totalnum is positive ${totalNum}`);
}
else {
  alert(`totalnum is negative ${totalNum}`);
}
/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let firstNumber = Number(prompt("First Number"));
let secondNumber = Number(prompt("Second Number"));
let operate = prompt("Enter one of them div, add, mul and sub.");
switch(operate) {
  case'add':
  alert(firstNumber + secondNumber);
  break;
  case'div':
  alert(firstNumber / secondNumber);
  break;
  case'mul':
  alert(firstNumber * secondNumber);
  break;
  case'sub':
  alert(firstNumber - secondNumber);
  break;
  default:
    alert(`Incorrect try again.`)
}