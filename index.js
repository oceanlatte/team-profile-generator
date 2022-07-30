const Employee = require('./lib/Employee');
// import other classes
const inquirer = require('inquirer');
const templateData = require('./src/template');
const fs = require('fs');

function startQuestions() {
  console.log('Welcome! As the team manager, please enter your information first:')
  // start with questions for Manager
   return inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: "What is your name?"
    },
    {
      type: 'text',
      name: 'id',
      message: 'What is your employee ID?'
    },
    {
      type: 'text',
      name: 'email',
      message: 'What is your email?'
    }
  ])
  .then(managerData => {
    const newEmployee = new Employee(managerData.name, managerData.id, managerData.email);
    console.log('inquierer manager data: ', managerData);
    teamArr.push(managerData);
    let teamArr = [];

    templateData(newEmployee);
  })
  // add fs write file function
}

startQuestions();