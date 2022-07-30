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
    },
    {
      type: 'text',
      name: 'office',
      message: 'What is your office number?'
    }
  ])
  .then(managerData => {
    const { name, id, email, office } = managerData;
    const teamManager = new Manager(name, id, email, office);

    teamArr.push(teamManager);
    teamQuestions();
  })
}

function teamQuestions() {
  console.log(`
  ==================
  Add a New Employee
  ==================
  `);

  // after confirmation THEN send to templateData(teamArr)
}


startQuestions()
  // add fs write file function
  // .then()
  // .then(fs.writeFile('./dist/index.html', ))
;