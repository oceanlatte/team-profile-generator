const inquirer = require('inquirer');
const pageGenerator = require('./src/template');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { start } = require('repl');

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
      message: 'What is your employee ID?' 
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is your office number?'
    }
  ])
  .then(managerData => {
    managerValidate(managerData);
  })
}

// ADD NEW team members OR finish building team
function newTeamMember() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'roleChoice',
      message: 'Which employee type would you like to add?',
      choices: ['Engineer', 'Intern', new inquirer.Separator(), 'Finish building team']
    }
  ])
  .then((roleAnswer) => {
    // IF ANSWER == 'Finish building team' THEN VALIDATE?
    if (roleAnswer.roleChoice == 'Finish building team') {
      // after confirmation THEN send to templateData(teamArr)
      console.log('Team Array right before generate page', teamArr);
      writeToFile('./dist/index.html', pageGenerator(teamArr));
      return;
    }
    // send the chosen role to the sharedQuestions function
    sharedQuestions(roleAnswer); 
  })
}


function sharedQuestions(roleAnswer) {
  console.log(`
  ===================
  Add a New ${roleAnswer.roleChoice}
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

        // send back to ask if another team member should be added
        newTeamMember();
      })
    }
  })
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Page generated successfully!');
    }
  })
};

// validate manager information
const managerValidate = managerData => {
  console.table(managerData);
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'managerConfirm',
      message: 'Please confirm the above information is true:',
      validate: confirm => {
        if (confirm) {
          const { name, id, email, office } = managerData;
          const teamManager = new Manager(name, id, email, office);

          // add manager information to team array
          teamArr.push(teamManager);

          // send to generate new team members
          newTeamMember(); 
        } else {
          console.log('No problem, please try again.');
          // send to startQuestions again
          startQuestions();
        }
      }
    },
  ])
};

startQuestions();