const Employee = require('./lib/Employee');
// import other classes
const inquirer = require('inquirer');


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
    const newManager = new Manager(data.name, data.id, data.email)
  })


  

}

startQuestions();


   // .then(({ name }) => {
  //   this.name = new Employee name;
  //   console.log(this.name);
  // })

  // inquirer.prompt()
  // .then(({ id }) => {
  //   this.id = id;
  // })