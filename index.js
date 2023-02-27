//Import classes
import { Manager } from "./lib/Manager.js";
import { Engineer } from "./lib/Engineer.js";
import { Intern } from "./lib/Intern.js";

// Import questions 
import { managerQuestions, engineerQuestions, internQuestions, teamMemberList } from "./src/questions.js";

// Import render function
import { render } from "./src/page-template.js";

import inquirer from "inquirer";
import fs from "fs";


const employeeList = [];

// Generate the data for the manager team member
function addManager() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.table(manager);
            employeeList.push(manager);
            addNewTeamMember()
    });
}

// Generate the data for the engineer team member
function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            console.table(engineer);
            employeeList.push(engineer);
            addNewTeamMember()
    });
}

// Generate the data for the intern team member
function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            const engineer = new Intern(answers.name, answers.id, answers.email, answers.school);
            console.table(engineer);
            employeeList.push(engineer);
            addNewTeamMember()
    });
}

// Generate the prompt to add a new team member
function addNewTeamMember(){
    inquirer
    .prompt(teamMemberList)
    .then((answer) => {
        if (answer.newTeamMember === 'Engineer') {
            addEngineer();
        } else if (answer.newTeamMember === 'Intern') {
            addIntern();
        } else {
            // Finish the program and write to file
            writeToFile(employeeList)
        }
    });
}

function writeToFile(employeeList) {
    fs.mkdir("./output", { recursive: true }, (err) => {if (err) throw err;})
    fs.writeFile(`./output/team.html`, render(employeeList), (err) => err ? console.error(err) : console.log("Success! You Team member landing page has been generated in the output folder"));
}

function init(){
    addManager()
}

init()