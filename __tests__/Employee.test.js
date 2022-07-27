const Employee = require('../lib/Employee');

jest.mock('../lib/Employee')

test('creates an employee object', () => {
  const employee = new Employee('Bob');

  expect(employee.name).toBe('Bob');
  expect(employee.id).toEqual(expect.any(Number));
  expect.stringContaining(employee.email);
});

// test getId()
// test getEmail()
// test getRole() -- returns 'Employee'