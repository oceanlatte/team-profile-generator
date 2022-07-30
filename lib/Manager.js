const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);

    this.office = office;
    this.role = 'Manager';
  }
  // write ----officeNumber()------
  officeNumber() {
    return this.office;
  }
  
  // write ----getRole ---- returns: 'Manager'
  getRole() {
    return 'Manager';
  }
}


module.exports = Manager;