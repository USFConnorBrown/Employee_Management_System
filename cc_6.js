//Step 2: Create a base
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
describe() {
        return `${this.name} works in ${this.department}`;
    }
}
//Step 3: Create a subclass
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${this.name} and manages a team of ${this.department} department with a team of ${this.teamSize.Size}.`;
    }
}