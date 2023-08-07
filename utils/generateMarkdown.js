// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''
  switch (license){   
    case 'Apache License 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'Boost Software License 1.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
      break;
    case 'BSD 2-Clause "Simplified" License':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
      break; 
    case 'BSD 3-Clause "New" or "Revised" License':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
      break;
    case 'Eclipse Public License 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
      break; 
    case 'GNU Affero General Public License v3.0':
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'GNU General Public License v2.0':
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      break; 
    case 'GNU Lesser General Public License v2.1':
      licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
      break;  
    case 'MIT License':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break; 
    case 'The Unlicense':
      licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break;  
    default:
      licenseBadge = `` 
      break;
  }
  return licenseBadge
  //return the correct license badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license != 'none'){
    return `- [License](#license)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  console.log(license)
  if (license != 'none'){
    return `## License
  
  ${license}`
  } else {
    return ''
  }
  
  //return literal of the section, if there is one
}

// TODO: Create a function to generate markdown for README
export const generateMarkdown = (data) => {
  const licenseBadge =  renderLicenseBadge(data.license)
  const licenseLink = renderLicenseLink(data.license)
  const licenseSection = renderLicenseSection(data.license)

  return `
  ${licenseBadge}
  
  # ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${licenseLink}
  - [Credits](#credits)
  - [Features](#features)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## Credits

  ${data.credits}

  ${licenseSection}

  ## Features 

  ${data.features}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions

  Check out my github profile (${data.username}):

  https://github.com/${data.username}

  If you have any questions about this project, email me at:

  ${data.email}

`;
}
