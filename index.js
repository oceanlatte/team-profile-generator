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
    newTeamMember();
  })
}

// add team members OR finish building team
function newTeamMember() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'roleChoice',
      message: 'Which employee type would you like to add?',
      choices: ['Engineer', 'Intern', 'Finish building team']
    }
  ])
  .then((roleAnswer) => {
    // IF ANSWER == 'Finish building team' THEN VALIDATE?
    if (roleAnswer.roleChoice == 'Finish building team') {
      templateData(teamArr);
      return;
    }
    // Otherwise do the sharedQuestions function
    // send to questions that engineer AND intern share
    sharedQuestions(roleAnswer); 
  })

  // after confirmation THEN send to templateData(teamArr)
}


function sharedQuestions(roleAnswer) {
  console.log(`
  ===================
  Add a New Employee
  ===================
  `);

  // shared questions between engineer and intern
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: `What is the ${roleAnswer.roleChoice}'s name?`,
    },
    {
      type: 'input',
      name: 'id',
      message: `What is the ${roleAnswer.roleChoice}'s employee ID?`
    },
    {
      type: 'input',
      name: 'email',
      message: `What is the ${roleAnswer.roleChoice}'s email?`
    }
  ])
  // then ask role specific questions
  .then ((newEmployeeData) => {
    // IF ENGINEER IS CHOSEN
    if(roleAnswer.roleChoice == 'Engineer') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'github',
          message: 'What is their GitHub username?'
        }
      ])
      .then((engineerGithub) => {
        const { name, id, email } = newEmployeeData;
        const newEngineer = new Engineer(name, id, email, engineerGithub.github);

        // add new engineer data to Team Array
        teamArr.push(newEngineer);

        // send back to ask if another team member should be added
        newTeamMember();
      })
    }
    // IF INTERN IS CHOSEN
    else if (roleAnswer.roleChoice == 'Intern') {
      console.log('Intern was chosen');
      inquirer.prompt([
        {
          type: 'input',
          name: 'school',
          message: 'What school did they attend?',
        }
      ])
      .then((internSchool) => {
        const { name, id, email } = newEmployeeData;
        const newIntern = new Intern(name, id, email, internSchool.school);

        // add new intern to team Array
        teamArr.push(newIntern);
        console.log(teamArr);

        // send back to ask if another team member should be added
        newTeamMember();
      })
    }
  })
}


startQuestions()
  // add fs write file function
  // .then()
  // .then(fs.writeFile('./dist/index.html', ))
;