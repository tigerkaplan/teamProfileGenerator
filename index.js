//node module
const inquirer = require('inquirer');
const fs = require('fs');

// path
const path = require("path");

//team
const Team = require("./lib/Team");

// team profile
const Manager  = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern   = require("./lib/Intern");


// generateHTML file
const generateHTML= require("./output/generateHTML");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");













// TODO: Write Code to gather information about the development team members, and render the HTML file.

