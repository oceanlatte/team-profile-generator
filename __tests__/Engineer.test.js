const Engineer = require('../lib/Engineer');

test('creates an engineer employee object', () => {
  const engineer = new Engineer('Deb');
  expect(typeof(engineer)).toBe('object');
  expect(engineer.name).toBe('Deb');
});

// test getGithub method
test('method returns engineers role', () => {
  const engineer = new Engineer('Deb', 123, 'email', 'github.com/repo')
  expect(engineer.getGithub()).toBe('github.com/repo');
});

// test getRole method
test('method returns role as engineer', () => {
  const engineer = new Engineer('Deb');
  expect(engineer.role).toBe('Engineer');
});

