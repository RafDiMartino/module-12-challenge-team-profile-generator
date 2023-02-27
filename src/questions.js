// Questions for the manager team member
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid Manager name");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID of the team manager?',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid ID number");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address of the team manager?',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid email address");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the team manager?',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid office number");
            }
            return true;
        }
    },
]

export { managerQuestions }