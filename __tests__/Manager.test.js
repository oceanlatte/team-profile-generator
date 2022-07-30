const Manager = require('../lib/Manager');

test('creates manager object', () => {
  const manager = new Manager('Sarah');
  expect(typeof(manager)).toBe('object');
  expect(manager.name).toBe('Sarah');
});

// test for office number
test('method returns office number', () => {
  const manager = new Manager('Sarah', 123, 'email', 456);
  expect(manager.officeNumber()).toBe(456);
})

// test for role -- returns: Manager
test('method returns manager role name', () => {
  const manager = new Manager('Sarah');
  expect(manager.getRole()).toBe('Manager');
})