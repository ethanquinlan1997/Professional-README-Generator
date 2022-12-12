// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseChoice = license;
  let usersLicense = '';
  
  // If statement for MIT License
  if (licenseChoice === 'MIT') {
    usersLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    return usersLicense;
}
  
// If statement for Mozilla License
  else if (licenseChoice === 'Mozilla') {
    usersLicense = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
  return usersLicense;
}

// If statement for Apache 2.0 License
  else if (licenseChoice === 'Apache 2.0') {
  usersLicense = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
  return usersLicense;
}

// If statement for Unlicense License
  else if (licenseChoice === 'Unlicense') {
  usersLicense = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
  return usersLicense;
}

// IF user input is empty, returns an empty string
else {
  return usersLicense = '';
}
};




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

let licenseLink = license;
let usersLicenseLink = '';

// MIT License Link
if (licenseLink === 'MIT') {
  usersLicenseLink = '(https://opensource.org/licenses/MIT)'
  return usersLicenseLink;
}

// Mozilla License Link
else if (licenseLink === 'Mozilla') {
  usersLicenseLink = '(https://opensource.org/licenses/MPL-2.0)'
  return usersLicenseLink;
}

// Apache License Link
else if (licenseLink === 'Apache 2.0') {
  usersLicenseLink = '(https://opensource.org/licenses/Apache-2.0)'
  return usersLicenseLink;
}

// Unlicense Link
else if (licenseLink === 'Unlicense') {
  usersLicenseLink = '(http://unlicense.org/)'
  return usersLicenseLink;
}

// IF user input is empty, returns an empty string
else {
  return usersLicenseLink = '';
}

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseTag = license;
  let usersLicenseTag = '';
  
  // Creates MIT tag in README under License section
  if (licenseTag === 'MIT') {
    usersLicenseTag = '##License'
    return usersLicenseTag = '';
  }

  // Creates Mozilla tag in README under License section
  else if (licenseTag === 'Mozilla') {
    usersLicenseTag = '##License'
    return usersLicenseTag = '';
  }

  // Creates Apache tag in README under License section
  else if (licenseTag === 'Apache 2.0') {
    usersLicenseTag = '##License'
    return usersLicenseTag = '';
  }

  // Creates Unlicense tag in README under License section
  else if (licenseTag === 'Unlicense') {
    usersLicenseTag = '##License'
    return usersLicenseTag = '';
  }

  // If no license is selected then section will be empty
  else {
    return usersLicenseTag = '';
  }

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description(#table-of-contents) 
${data.description}

## Table-of-Contents :
1. [Installation](#installation)
2. [Usage](#usage)
3. [Test](#tests)
4. [Contributions](#contributions)
5. [Github](#github)
6. [Email](#email)
7. [License](#license)

## Installation(#table-of-contents)
Use the following command to install: 
${data.installation}

## Usage(#table-of-contents)
${data.usage}

## Test(#table-of-contents)
Use the following command to test: 
${data.tests}

## Contributions(#table-of-contents) 
${data.contributions}

## Questions
If you have questions, you can email me at ${data.email} or
you can find me on Github using the following link: [${data.github}](https://github.com/${data.github})

## License(#table-of-contents)
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${data.license}
`;
}

module.exports = generateMarkdown;
