const Employee = require('./employee.js');

class Manager extends Employee {
	constructor(name, salary, title, manager, employees = []) {
		super(name, salary, title, manager);
		this.employees = employees;
	}

	addEmployee(employee) {
		this.employees.push(employee);
	}

	calculateBonus(multiplier) {
		return (
			(this.salary + this._totalSubSalary(this.employees)) * multiplier
		);
	}

	_totalSubSalary() {
		let sum = 0;
		this.employees.forEach(el => {
			if (el instanceof Employee) sum += el.salary;
			if (el instanceof Manager) sum += el._totalSubSalary(el.employees);
		});
		return sum;
	}
}

module.exports = Manager;
