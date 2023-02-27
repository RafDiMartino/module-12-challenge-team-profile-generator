//Import classes
import { Manager } from "./lib/Manager.js";
import { Engineer } from "./lib/Engineer.js";
import { Intern } from "./lib/Intern.js";

// Import questions 
import { managerQuestions, engineerQuestions, internQuestions, teamMemberList } from "./src/questions.js";

import inquirer from "inquirer";
import path from "path";
import fs from "fs";

const OUTPUT_DIR = path.resolve("output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

import { team } from "./src/page-template.js";

const employeeList = [];

// Generate the data for the manager team member
function addManager() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.table(manager);
            employeeList.push(manager);
            
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
            //finish the program
            return
        }
    });
}

function init(){
    // addManager()
    // addEngineer()
    // addIntern()
    addNewTeamMember()
}



init()