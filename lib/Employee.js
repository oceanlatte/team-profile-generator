class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  // write --getName-- function
  getName() {
    return this.name;
  }
 
	// write ---getId--- function
  getId() {
    return this.id;
  }

	// write ---getEmail--- function
  getEmail() {
    return this.email;
  }

  // write ----getRole ---- returns 'Employee'
  getRole() {
    return this.role;
  }
}

module.exports = Employee;