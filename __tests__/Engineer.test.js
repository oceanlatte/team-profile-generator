const Engineer = require('../lib/Engineer');

test('creates an engineer employee object', () => {
  const engineer = new Engineer('Deb');
  expect(typeof(engineer)).toBe('object');
  expect(engineer.name).toBe('Deb');
});

// test getGithub method
test('method returns engineers role', () => {
  const engineer = new Engineer('Deb', 123, 'email', 'repoUserName')
  expect(engineer.getGithub()).toBe('repoUserName');
});

// test getRole method
test('method returns role as engineer', () => {
  const engineer = new Engineer('Deb');
  expect(engineer.role).toBe('Engineer');
});

