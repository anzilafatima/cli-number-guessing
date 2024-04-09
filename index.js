#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random number 
//2) user input for guessing number 
//3) compare user input with computer generated number and show result 
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        message: "please guess a number between 1-10",
        name: "userGuessnumber",
        type: "number",
    }
]);
if (answers.userGuessnumber === randomNumber) {
    console.log("congratulations you guessed right Number!");
}
else {
    console.log("you guessed a wrong number");
}
;
