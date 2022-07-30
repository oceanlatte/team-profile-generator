const inquirer = require('inquirer');
const templateData = require('./src/template');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArr = [];


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
    const { name, id, email } = managerData;
    const newEmployee = new Employee(name, id, email);
    console.log('inquierer manager data: ', managerData);
    templateData(newEmployee);
    portfolioQuestions();
  })
}

function portfolioQuestions() {
  console.log(`
  ==================
  Add a New Employee
  ==================
  `);


  
}


startQuestions()
  // add fs write file function
  // .then()
  // .then(fs.writeFile('./dist/index.html', ))
;