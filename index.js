// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs'
import { generateMarkdown } from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    default: 'Project Title'
},
{
    type: 'input',
    name: 'description',
    message: 'What is the description for your project?',
    default: 'Description here'
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?',
    default: 'Install project like this'
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
    default: 'This is how it works...'
}
//what is the title of the project?
//what is the description of the project?
//what is the project's usage?
//how do you install the project?
//what are tests for the project?
//how can you contribute to the project?
//what license would you like to use?
//what is you github username?
//email address?
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./READMEs/${fileName}`, data, err => {
        if (err){
            throw err
        }
        
        console.log(`${fileName} saved!`)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const README = generateMarkdown(answers)
        const filename = `${answers.title}.md`
        writeToFile(filename, README)
    })
    .catch((err) => {
        console.log(err)
    })
}

// Function call to initialize app
init();
