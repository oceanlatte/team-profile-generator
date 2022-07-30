const Manager = require('../lib/Manager');

test('creates manager object', () => {
  const manager = new Manager('Sarah');
  expect(typeof(manager)).toBe('object');
  expect(manager.name).toBe('Sarah');
});

// test for office number

// test for role -- returns: Manager