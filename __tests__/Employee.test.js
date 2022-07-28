const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Bob');
  expect(typeof(employee)).toBe('object');

  expect(employee.name).toBe('Bob');
  expect(employee.id).toEqual(expect.any(Number));
  expect.stringContaining(employee.email);
});

test('returns employees name', () => {
  const employee = new Employee('Bob');

  expect(employee.getName).toBe('Bob');
});


// test for getId()
// test('returns employees ID', () => {
//   const newId = 1234;
//   const employee = new Employee('Bob', newId);

//   expect(employee.getId).toBe(newId);
// });

// test('returns employees ID', () => {
//   return getId().then(data => {
//     expect(data).toBe('')
//   })
//   const newId = 1234;
//   const employee = new Employee('Bob', newId);

//   expect(employee.getId).toBe(newId);
// });


// test getEmail()
// test getRole() -- returns 'Employee'