const inquirer = require("inquirer");

// team profile
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");


const generateHTML = require("./src/page-template.js"); // generateHTML file
const fs = require("fs"); //node module
const path = require("path"); // path

// render the template
const OUTPUT_DIR = path.resolve(__dirname, "output"); // path to output directory
const outputPath = path.join(OUTPUT_DIR, "team.html"); // target location

// team members information
const teamMembers = [];



//  Generate the HTML file for template division for the team
const render = require("./src/page-template.js");



// TODO: Write Code to gather information about the development team members, and render the HTML file.

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Manager name (required):",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.error("Please enter manager name");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "employeeId",
        message: "Employee Id (required):",
        validate: employeeIdInput => {
          if (employeeIdInput) {
            return true;
          } else {
            console.error("Please enter employee Id");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Email address (required):",
        validate: email => {
          if (email) {
            return true;
          } else {
            console.error("Please enter email address");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Office Number (required):",
        validate: officeNumber => {
          if (officeNumber) {
            return true;
          } else {
            console.error("Please enter office number");
            return false;
          }
        }
      }
    ])
    .then(answers => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptTeamMember();
    });
};
const promptTeamMember = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "teamMember",
        message: "Choice a team member:",
        choices: ["Engineer", "Intern", "finish building team "]
      }
    ])
    .then(userChoice => {
      switch (userChoice.teamMember) {
        case "Engineer":
          promptEngineer();
          break;
        case "Intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};
const promptEngineer = () => {
  console.log(`
  ************

  New Engineer

  ************
  `);
  // engineer section
  return inquirer
    .prompt([
      // name  of engineer
      {
        type: "input",
        name: "name",
        message: "Engineer name (required):",
        validate: engineerName => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter valid name");
            return false;
          }
        }
      },
      // ID of engineer
      {
        type: "input",
        name: "employeeId",
        message: "Employee Id (required):",
        validate: employeeIdInput => {
          if (employeeIdInput) {
            return true;
          } else {
            console.error("Please enter employee Id");
            return false;
          }
        }
      },
      //  email of engineer,
      {
        type: "input",
        name: "email",
        message: "Email address (required):",
        validate: email => {
          if (email) {
            return true;
          } else {
            console.error("Please enter email address");
            return false;
          }
        }
      },
      //  GitHub of engineer,
      {
        type: "input",
        name: "github",
        message: "GitHub username (required):",
        validate: github => {
          if (github) {
            return true;
          } else {
            console.error("Please enter a GitHub username");
            return false;
          }
        }
      }
    ])
    .then(answers => {
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptTeamMember();
    });
};

const promptIntern = () => {
  console.log(`
  **********

  New Intern 

  **********
  `);
  // intern section
  return inquirer
    .prompt([
      // name  of intern
      {
        type: "input",
        name: "name",
        message: "Intern name (required):",
        validate: internName => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter valid name");
            return false;
          }
        }
      },
      // ID of intern
      {
        type: "input",
        name: "employeeId",
        message: "Employee ID (required):",
        validate: employeeIdInput => {
          if (employeeIdInput) {
            return true;
          } else {
            console.log("Please enter employee Id");
            return false;
          }
        }
      },
      //  email of intern,
      {
        type: "input",
        name: "email",
        message: "Email address (required):",
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log("Please enter email address");
            return false;
          }
        }
      },
      //  school of intern,
      {
        type: "input",
        name: "school",
        message: "School of intern (required):",
        validate: school => {
          if (school) {
            return true;
          } else {
            console.log("Please enter school of intern");
            return false;
          }
        }
      }
    ])
    .then(answers => {
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptTeamMember();
    });
};

const buildTeam = () => {
  console.log(`
  ***********************************

  Finishing the building team process

  ***********************************
  `);
// Create the directory if it doesn't exist
console.log(generateHTML(teamMembers));
fs.writeFileSync(outputPath, generateHTML(teamMembers));

};


// Start gathering team information
promptManager();
