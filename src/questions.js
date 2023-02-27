// Questions for the manager team member
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the manager's name:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid name");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter the manager's employee ID:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid ID number");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter the manager's email address:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid email address");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid office number");
            }
            return true;
        }
    },
]

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid name");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter the engineer's employee ID:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid ID number");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's email address:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid email address");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's github profile:",
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid github profile");
            }
            return true;
        }
    },
] 

export { managerQuestions, engineerQuestions }