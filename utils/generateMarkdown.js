// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''
  switch (license){   
    case 'Apache License 2.0':
      licenseBadge = ``
      break;
    case 'Boost Software License 1.0':
      licenseBadge = ``
      break;
    case 'BSD 2-Clause "Simplified" License':
      licenseBadge = ``
      break; 
    case 'BSD 3-Clause "New" or "Revised" License':
      licenseBadge = ``
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = ``
      break;
    case 'Eclipse Public License 2.0':
      licenseBadge = ``
      break; 
    case 'GNU Affero General Public License v3.0':
      licenseBadge = ``
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = ``
      break;
    case 'GNU General Public License v2.0':
      licenseBadge = ``
      break; 
    case 'GNU Lesser General Public License v2.1':
      licenseBadge = ``
      break;  
    case 'MIT License':
      licenseBadge = ``
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = ``
      break; 
    case 'The Unlicense':
      licenseBadge = ``
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
  
  return `## License
  
  ${license}`
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

  ## Badges

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
