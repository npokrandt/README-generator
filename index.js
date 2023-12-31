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
},
{
    type: 'input',
    name: 'credits',
    message: 'What are the project credits?',
    default: 'These people assisted me:'
},
{
    type: 'list',
    name: 'license',
    message: 'What license are you using?',
    choices: ['none', 'Apache License 2.0', 'Boost Software License 1.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense'],
    default: 'none'
},
{
    type: 'input',
    name: 'features',
    message: 'What features of the project would you like to highlight?',
    default: 'features:'
},
{
    type: 'input',
    name: 'contribution',
    message: 'How can people contribute to your project?',
    default: 'Here\'s how you can help'
},
{
    type: 'input',
    name: 'tests',
    message: 'What tests would you like to add to your project?',
    default: 'Try these tests:'
},
{
    type: 'input',
    name: 'username',
    message: 'What is your github username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},

//what are tests for the project?
//how can you contribute to the project?
//what license would you like to use?
//what is you github username?
//email address?
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./READMEs/README.md`, data, err => {
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
