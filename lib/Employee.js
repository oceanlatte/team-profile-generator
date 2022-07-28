class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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
    return 'Employee';
  }
}

module.exports = Employee;