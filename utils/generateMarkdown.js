// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//https://img.shields.io/badge/Apache-2.0-brightgreen.svg





function renderLicenseBadge(licenseBadge) {

  if (licenseBadge !== 'No license') {
    switch (licenseBadge) {
      case 'Apache ':
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case 'BSD 3':
        licenseBadge = `![License] (https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
        break;
      case 'GNU GPLv3.0':
        licenseBadge = `![License] (https://img.shields.io/badge/License-GPLv3-blue.svg)`;
        break;
      case 'MIT':
        licenseBadge = `![License] (https://img.shields.io/badge/License-MIT-yellow.svg)`;
        break;
      default:
        break;
    }
    return licenseBadge;
  } else {
    return ' ';
  }
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {

  if (licenseLink !== 'No license') {
    switch (licenseLink) {
      case 'Apache 2.0':
        //console.log("Hello");
        licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
        break;
      case 'BSD 3-Clause':
        licenseLink = `(https://opensource.org/licenses/BSD-3-Clause)`;
        break;
      case 'GNU GPLv3.0':
        licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case 'MIT':
        licenseLink = `(https://opensource.org/licenses/MIT)`;
        break;
      default:
        break;
    }
    return licenseLink;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== 'No license') {
    return `
       following license: ${renderLicenseBadge(license)} & ${renderLicenseLink(license)}
        `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ${renderLicenseBadge(data.license)}}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  * Checkout my [GitHub profile](https://github.com/${data.github})
  
  * Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 
  ## License
  Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved.
  
  Licensed under the  ${renderLicenseSection(data.license)} license.
  
`;
}


module.exports = generateMarkdown;
