const Employee = require("./Employee");

// This class defines and exports the Engineer class. This class inherits from Employee.
class Engineer extends Employee{

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;