#! /usr/bin/env node

import inquirer from "inquirer";

// // 1: computer will generate a random number (done)

// 2: userr input for guessing number(done)

// 3:compare user input with computer generated numberand show result(done)


const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer =await inquirer.prompt([
{
name: "userGuessedNumber",
type: "number",
message: "please guess a number between 1-10: ",
},
]);
if(answer.userGuessedNumber === randomNumber){
console.log("congratulation! you guessed right number. ")
}else {
console.log("you guessed wrong")
 }