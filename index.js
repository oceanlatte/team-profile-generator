const Employee = require('./lib/Employee');
// import other classes
const inquirer = require('inquirer');
const templateData = require('./src/template');
const fs = require('fs');


function startQuestions() {
  // start with questions for Manager
  inquirer.prompt([
    {
    type: 'text',
    name: 'name',
    message: "What is the team manager's name?"
    },
    {
      type: 'text',
      name: 'id',
      message: 'What is their employee ID?'
    },
    {
      type: 'text',
      name: 'email',
      message: 'What is your email?'
    }
  ]
  ).then(data => {
    const newEmployee = new Employee(data.name, data.id, data.email);
    console.log('inquierer data: ', data)
    console.log('newManageer Employee object', newEmployee);
    templateData(newEmployee);
  })
  // add fs write file function
}

startQuestions();