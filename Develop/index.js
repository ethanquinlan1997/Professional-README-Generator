// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the Project Title',
        name: 'title'
    },
    {
        type: 'editor',
        message: 'Give a brief description of your project?',
        name: 'description'
    },
    {
        type: 'editor',
        message: 'How to install this package?',
        default: 'Use npm i in terminal to install dependencies',
        name: 'installation'
    },
    {
        type: 'editor',
        message: 'How do we use your app?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please select a license to use in your project?',
        name: 'license',
        choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'Unlicense']
    }, 
    {
        type: 'editor',
        message: 'How to contribute to your project?',
        name: 'contributions'
    },
    {
        type: 'editor',
        message: 'Instructions for testing?',
        default: 'Use npm test to run tests',
        name: 'tests'
    },
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
