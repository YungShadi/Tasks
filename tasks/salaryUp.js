
function increaseSalary() {
    return api.getEmployees()
        .then(function (_employees) {
            let employee = [];
            employee.push(_employees[0]);
            let employeeSalary = employee[0].salary;
            for (i = 0; i < _employees.length; i++) {
                let currEmpSalary = _employees[i].salary;
                if (employeeSalary > currEmpSalary) {
                    employee.shift();
                    employee.push(_employees[i]);
                }
            }
            if (employee.length === 0) {
                return false;
            }
            return employee;
        })
        .then(function (employee) {
            if (!employee) {
                return false;
            }
            let employeeId = employee[0].id;
            let newSalary = (employee[0].salary / 100) * 20 + employee[0].salary;
            return api.setEmployeeSalary(employeeId, newSalary);
        })
        .then(function (employee) {
            if (!employee) {
                return false;
            }
            let employeeId = employee.id;
            let text = `Hello, ${employee.name}! Congratulations, your new salary is ${employee.salary}!`;
            return api.notifyEmployee(employeeId, text);
        })
        .catch(function (error) {
            api.notifyAdmin(error);
            return false;
        });
}

const api = {
    _employees: [
        { id: 1, name: 'Alex', salary: 'asdad' },
        { id: 2, name: 'Fred', salary: 'dsadsa' },
        { id: 3, name: 'Bob', salary: 'asdsad' },
    ],

    getEmployees() {
        return new Promise((resolve) => {
            resolve(this._employees.slice());
        });
    },

    setEmployeeSalary(employeeId, newSalary) {
        return new Promise((resolve) => {
            this._employees = this._employees.map((employee) =>
                employee.id !== employeeId
                    ? employee
                    : {
                        ...employee,
                        salary: newSalary,
                    }
            );
            resolve(this._employees.find(({ id }) => id === employeeId));
        });
    },

    notifyEmployee(employeeId, text) {
        return new Promise((resolve) => {
            resolve(true);
        });
    },

    notifyAdmin(error) {
        return new Promise((resolve) => {
            resolve(true);
        });
    },

    setEmployees(newEmployees) {
        return new Promise((resolve) => {
            this._employees = newEmployees;
            resolve();
        });
    },
};

console.log(increaseSalary()) 