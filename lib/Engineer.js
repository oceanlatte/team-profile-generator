const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
  super(name, id, email);
  
  this.github = github;
  this.role = 'Engineer';
  }

  // write ---getGithub method----
  getGithub() {
    return this.github;
  }

  // write ----getRole method----- returns: Engineer
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;