// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generatePage = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your project title.' }
        },
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the repository name of your project?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your repository name.' }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter description.' }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions for installation',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter instructions.' }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter usage information.' }
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are contribution guidelines?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your contribution guidelines.' }
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your test instructions.' }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: [ "Apache","BSD 3", "GNU GPLv3", "MIT",  "No license"]
           // if (value) { return true } else { return 'Please choose a license.' }
       // },
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your username.' }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value) => {
            if (value) {
                return true
            } else { return 'Please enter your email address.' }
        },
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
        fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Your README.md file has been generated in the assets folder. ')
    )};



// TODO: Create a function to initialize app
function init() {
   
        inquirer.prompt(questions)
        .then((answers) => {
            const readmePageContent = generatePage(answers);
            
            writeToFile('./assets/generatedREADME.md',readmePageContent);
        })
    };

// Function call to initialize app
init();
