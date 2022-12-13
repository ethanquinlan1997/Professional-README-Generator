// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
        validate: userGithubInput => {
            if (userGithubInput) {
                return true;
            }
            else {
                console.log('Please enter in your github username.')
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: userEmailInput => {
            if (userEmailInput) {
                return true;
            }
            else {
                console.log('Please enter in your email.')
            }
        }
    },
    {
        type: 'input',
        message: 'What is the Project Title',
        name: 'title',
        validate: userTitleInput => {
            if (userTitleInput) {
                return true;
            }
            else {
                console.log('Please enter in a title for your project.')
            }
        }
    },
    {
        type: 'input',
        message: 'Give a brief description of your project?',
        name: 'description',
        validate: userDescriptionInput => {
            if (userDescriptionInput) {
                return true;
            }
            else {
                console.log('A description of your project is required.')
            }
        }
    },
    {
        type: 'input',
        message: 'How to install this package?',
        default: 'Use npm i in terminal to install dependencies',
        name: 'installation',
        validate: userInstallationInput => {
            if (userInstallationInput) {
                return true;
            }
            else {
                console.log('Please provide an installation process.')
            }
        }
    },
    {
        type: 'input',
        message: 'How do we use your app?',
        name: 'usage',
        validate: userUsageInput => {
            if (userUsageInput) {
                return true;
            }
            else {
                console.log('Please enter in usage info for your project.')
            }
        }
    },
    {
        type: 'list',
        message: 'Please select a license to use in your project?',
        name: 'license',
        choices: ['MIT', 'Mozilla', 'Apache 2.0', 'Unlicense'],
        validate: userLicenseInput => {
            if (userLicenseInput) {
                return true;
            }
            else {
                console.log('Please select a license.');
            }
        }
    }, 
    {
        type: 'input',
        message: 'How to contribute to your project?',
        name: 'contributions',
        validate: userContributionsInput => {
            if (userContributionsInput) {
                return true;
            }    
         }
    },
    {
        type: 'input',
        message: 'Instructions for testing?',
        default: 'Use npm test to run tests',
        name: 'tests',
        validate: userTestsInput => {
            if (userTestsInput) {
                return true;
            }
            else {
                console.log('Please demonstrate how to test your application');
            }
        }
    },
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log('An error occurred: ' + err);
        }
        console.log('Successful!')
    })
};

// TODO: Create a function to initialize app
function init() {
    // Grabs questions asked to user.
   inquirer
   .prompt(questions)
   .then(function(userInput) {
// Writes README file based off user input.
    writeToFile('./README.md', generateMarkdown(userInput));
   });
}

// Function call to initialize app
init();
