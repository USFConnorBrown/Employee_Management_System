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
//Step 4 and 5: Create a few sample employees and managers and also create a company class to manage employees
class Company {
    constructor() {
        this.employees = []; 
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}
//Step 6: Create instances of employees and managers
const employee1 = new Employee("Lucas", "Software Development");
const employee2 = new Employee("Emma", "Engineering");
const manager1 = new Manager("Olivia", "Finance");  
const manager2 = new Manager("Liam", "Engineering");
companyInstance.listEmployees();