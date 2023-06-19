
async function increaseSalary() {
    let counter = 0;
    let allEmployees = await api.getEmployees();
    let sumSalary = 0;
    let successfulEmployees = [];
    try {
      for (let i = 0; i < allEmployees.length; i++) {
        sumSalary += allEmployees[i].salary;
      }
      let averageSalary = sumSalary / allEmployees.length;
      for (let i = 0; i < allEmployees.length; i++) {
        let curEmpId = allEmployees[i].id;
        let salaryIncrease;
        if (allEmployees[i].salary < averageSalary) {
          salaryIncrease = allEmployees[i].salary * 1.2;
        } else {
          salaryIncrease = allEmployees[i].salary * 1.1;
        }
        try {
          await api.setEmployeeSalary(curEmpId, salaryIncrease);
          await api.notifyEmployee(
            curEmpId,
            `Hello, ${allEmployees[i].name}! Congratulations, your new salary is ${salaryIncrease}!`
          );
          counter++;
          successfulEmployees.push(allEmployees[i]);
        } catch (e) {
          await api.notifyAdmin(e);
        }
      }
      try {
        let sumSalary = 0;
        let allSalaryAfterIncrease = await api.getEmployees();
        for (let i = 0; i < successfulEmployees.length; i++) {
          const employee = successfulEmployees[i];
          const updatedEmployee = allSalaryAfterIncrease.find((emp) => emp.id === employee.id);
          sumSalary += updatedEmployee.salary;
        }
        await api.sendBudgetToAccounting(sumSalary);
        console.log(counter);
      } catch (e) {
        await api.notifyAdmin(e);
      }
    } catch (e) {
      await api.notifyAdmin(e);
    }
    return counter;
  }
  
  
  
  
  const api = {
      _employees: [
          { id: 1, name: 'Alex', salary: 120000 },
          { id: 2, name: 'Fred', salary: 110000 },
          { id: 3, name: 'Bob', salary: 80000 },
          { id: 3, name: 'Bob', salary: 800000 }
      ],
  
      getEmployees() {
          return new Promise((resolve) => {
              resolve(this._employees.slice());
          });
      },
  
      setEmployeeSalary(employeeId, newSalary) {
          return new Promise((resolve) => {
              const updatedEmployees = this._employees.map((employee) =>
                  employee.id !== employeeId
                      ? employee
                      : {
                          ...employee,
                          salary: newSalary,
                      }
              );
              this._employees = updatedEmployees;
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
              resolve();
          });
      },
  
      setEmployees(newEmployees) {
          return new Promise((resolve) => {
              this._employees = newEmployees;
              resolve();
          });
      },
  
      sendBudgetToAccounting(newBudget) {
          return new Promise((resolve) => {
              resolve();
          });
      },
  };
  
  console.log(increaseSalary());
  
  
  