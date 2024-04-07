#! /usr/bin/env node

import inquirer from "inquirer";

console.log("WELCOME TO DATA INPUT APP")
let answer = await inquirer.prompt(
    [
        {
            name: "name",
            type: "input",
            Message: "What is your name:"
        },
        {
            name: "age",
            type: "number",
            Message: "What is your age:"
        },
        {
            name: "gender",
            type: "list",
            Message: "What is your gender:",
            choices: ["male", "female", "prefer not to say"]
        },
        {
            name: "education",
            type: "input",
            Message: "What is your education:"
        }
    ]
);

console.log(`Your name is: ${answer.name} \n Your age is: ${answer.age} \n Your gender is: ${answer.gender} \n Your education is: ${answer.education}`)