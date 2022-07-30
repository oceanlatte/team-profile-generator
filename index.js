const inquirer = require('inquirer');
const templateData = require('./src/template');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArr = [];


// start with questions for Manager
function startQuestions() {
  console.log('Welcome! As the team manager, please enter your information first:')
   return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is your name?"
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID?' // ADD CONFIRMATION FOR NUMBER ONLY INPUT
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is your office number?' // ADD CONFIRMATION FOR NUMBER ONLY INPUT
    }
  ])
  .then(managerData => {
    const { name, id, email, office } = managerData;
    const teamManager = new Manager(name, id, email, office);

    teamArr.push(teamManager);
    // Send to choices for add team members
    teamQuestions();
  })
}

// add team members OR finish building team
function teamQuestions() {
  console.log(`
  ==================
  Add a New Employee
  ==================
  `);

  inquirer.prompt([
    {
      type: 'list',
      name: 'roleChoice',
      message: 'Which employee type would you like to add?',
      choices: ['Engineer', 'Intern', 'Finish building team']
    }
  ])
  .then((answer) => {
    // IF ANSWER == 'Finish building team' THEN VALIDATE? , ELSE do the sharedQuestions function
    sharedQuestions(answer); // send to questions that engineer AND intern share
  })

  // after confirmation THEN send to templateData(teamArr)
}


function sharedQuestions(answer) {
  // shared questions between engineer and intern
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: `What is the ${answer.roleChoice}'s name?`,
    },
    {
      type: 'input',
      name: 'id',
      message: `What is the ${answer.roleChoice}'s employee ID?`
    },
    {
      type: 'input',
      name: 'email',
      message: `What is the ${answer.roleChoice}'s email?`
    }
  ])
  // then ask role specific questions
  .then ((engineerData) => {
    // IF ENGINEER IS CHOSEN
    if(answer.roleChoice == 'Engineer') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'github',
          message: 'What is their GitHub username?'
        }
      ])
      .then((githubData) => {
        const newEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, githubData.github);
        teamArr.push(newEngineer);
        console.log('new team array with engineer', teamArr);
      })
    }
    // IF INTERN IS CHOSEN
    else {
      console.log('Engineer NOOOOTTT chosen');
    }
  })
}


startQuestions()
  // add fs write file function
  // .then()
  // .then(fs.writeFile('./dist/index.html', ))
;