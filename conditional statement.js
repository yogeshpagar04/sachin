//  prompt enter number and give the multiple of any number 
// let num = prompt("enter a  number:");
// if(num%3==0){
//     console.log(MIDIInputMap,"is multipel of 3");
//  }
//else{
//    console.log(num,"is not multiple of 3");
// }
// let num = prompt("Enter a number:");
// num = Number(num); // Ensure input is treated as a number

// if (num % 3 === 0) {
//     console.log(num, "is a multiple of 3");
// } else {
//     console.log(num, "is not a multiple of 3");
// }
// code with student score 
///let score=prompt("enter a number(0-100):");
// score=number(score);
// let grade;

// if(score>=90 && score<=100){
//     grade="A";
// }
// else if(score>=80 && score<=89){
//     grade="B";
// }
// else if(score>=70 && score<=79){
//     grade="C";
// }
// else if(score>=30 && score<=40){
//     grade="D";
// }
// console.log("According to your scores, your grade was:", grade);
let score = grade("Enter a number (0-100):");
score = Number(score); // Correct casing
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score <= 89) {
  grade = "B";
} else if (score >= 70 && score <= 79) {
  grade = "C";
} else if (score >= 30 && score <= 40) {
  grade = "D";
} else if (score >= 0 && score < 30) {
  grade = "F";
} else {
  grade = "Invalid score!";
}

console.log("According to your scores, your grade was:", grade);
