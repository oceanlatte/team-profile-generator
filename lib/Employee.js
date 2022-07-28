const inquirer = require('inquirer');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // write --getName()-- function
  getName() {
    inquirer.prompt({
      type: 'text',
      name: 'name',
      message: "What is the team manager's name?"
    })

    .then(({ name }) => {
      this.name = name;
      console.log(this.name);
    })
  }

	// write ---getId()--- function
  getId() {
    inquirer.prompt({
      type: 'text',
      name: 'id',
      message: 'What is their employee ID?'
    })
    .then(({ id }) => {
      this.id = id;
    })
  }
	// getEmail()
  // getRole() -- returns 'Employee'
}

module.exports = Employee;