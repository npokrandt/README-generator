// TODO: Include packages needed for this application
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'response',
            message: 'Type literally anything:',
            default: 'Stan is coming!!'
        }
    ]).then((answers) => {
        console.log(answers)
    })
    .catch((err) => {
        console.log(err)
    })
}

// Function call to initialize app
init();
