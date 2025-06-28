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
