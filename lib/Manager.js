const Employee = require("./Employee");

// This class defines and exports the Manager class. This class inherits from Employee.
class Manager extends Employee {
    
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;