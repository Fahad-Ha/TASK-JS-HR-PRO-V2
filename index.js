const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

// Code Here
class Employee {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }
  idBadge() {
    return `${this.position}: ${this.name}`;
  }
}

class Manager extends Employee {
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    super(name, position, yearJoined, salary);
    this.bonusPercentage = bonusPercentage;
  }
  salaryIncrease(increaseAmount) {
    this.salary += increaseAmount;
  }
  logManagerInfor(currentYear) {
    return `${this.bonusPercentage}\n since ${
      currentYear - this.yearJoined
    } years\n Bonus % ${this.bonusPercentage}`;
  }
}

let emploArray = employeesJSON.map(
  (employee) =>
    new Employee(
      employee.name,
      employee.position,
      employee.yearJoined,
      employee.salary
    )
);

let mangArray = managersJSON.map(
  (manager) =>
    new Manager(
      manager.name,
      manager.position,
      manager.yearJoined,
      manager.salary,
      manager.bonusPercentage
    )
);

// console.log(emploArray[0].idBadge());
// console.log(mangArray[0]);
// console.log(mangArray[0].salaryIncrease(20));
console.log(mangArray[0].logManagerInfor(2023));

// emploArray.forEach((employee) => console.log(employee.idBadge()));
let superHeroes = emploArray.filter(
  (employee) => employee.position === "Developer"
);
// console.log(emploArray);

// console.log(superHeroes);

mangArray.forEach((manager) => {
  if (Math.abs(manager.yearJoined - 2023) > 11) {
    manager.salaryIncrease(1000);
  }
});

// console.log(mangArray);
mangArray.forEach((manager) => console.log(manager.logManagerInfor(2023)));

let seniorExecutives = mangArray.filter((manager) => manager.yearJoined < 2012);
// console.log(seniorExecutives);

let lowestBonus = mangArray.find((manager) => manager.bonusPercentage == 0.1);

// console.log(lowestBonus);

let promotionCandidate = emploArray.find((employee) => employee.salary > 8000);
// console.log(promotionCandidate);

// let highestSalary = 0;
// let mostPaidEmployee;
// emploArray.forEach((employee) => {
//   if (employee.salary > highestSalary) {
//     highestSalary = employee.salary;
//     mostPaidEmployee = employee;
//   }
// });

const mostPaidEmployee = emploArray.reduce(
  (acc, crr) => (acc > crr.salary ? acc : crr.salary),
  0
);
// const mostPaidEmployee = emploArray.reduce(
//   (acc, crr) => (acc.salary > crr.salary ? acc.salary : crr.salary),
//   emploArray[0]
// );

// console.log(mostPaidEmployee);

let salaryArray = emploArray.map((employee) => employee.salary);
console.log(salaryArray);
let totalSalaries = salaryArray.reduce((sum, employee) => sum + employee, 0);
// console.log(totalSalaries);

let employeesSorted = emploArray.sort((a, b) => a.salary - b.salary);

// console.log(employeesSorted);
