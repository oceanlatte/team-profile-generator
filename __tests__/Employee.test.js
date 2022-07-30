const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Bob');
  expect(typeof(employee)).toBe('object');
  expect(employee.name).toBe('Bob');
});

// test for getName()
test('returns employees name', () => {
  const employee = new Employee('Bob');
  expect(employee.getName()).toBe('Bob');
});

// test for getId()
test('returns employees ID', () => {
  const employee = new Employee('Bob', 1234);
  expect(employee.getId()).toBe(1234);
});

// test getEmail()
test('returns empolyees email', () => {
  const employee = new Employee('Bob', 1234, 'sample@email.com');
  expect(employee.getEmail()).toBe('sample@email.com');
});

// test getRole() 
test('returns employee role', () => {
  const employee = new Employee('Bob', 1234, 'email', 'Employee');
  expect(employee.getRole()).toBe('Employee');
})