const inquirer = require('inquirer');

class Employee {
  constructor(name = '') {
    this.name = name;
    this.id;
    this.email;

    console.log(this.name);
  }

  // getName()
  // getName() {
  //   inquirer.prompt({
  //     type: 'text',
  //     name: 'name',
  //     message: "What is the team manager's name?"
  //   })

  //   .then(({ name }) => {
  //     this.name = name;
  //     console.log(this.name);
  //   })
  // }

	// getId()
	// getEmail()
  // getRole() -- returns 'Employee'
}

module.exports = Employee;