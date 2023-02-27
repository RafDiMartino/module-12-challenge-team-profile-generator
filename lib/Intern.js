import { Employee } from "./Employee.js";

// This class defines and exports the Intern class. This class inherits from Employee.
class Intern extends Employee {

    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }

    getRole(){
        return "Intern"
    }
    
    getSchool(){
        return this.school
    }

}
export { Intern };