const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Fred');
  expect(typeof(intern)).toBe('object');
  expect(intern.name).toBe('Fred');
});

// test for getSchool method
test('getSchool method returns interns school', () => {
  const intern = new  Intern('Fred', 123, 'email', 'MIT');
  expect(intern.getSchool()).toBe('MIT');
});

// test for getRole method
test('getRole method returns intern', () => {
  const intern = new Intern('Fred');
  expect(intern.getRole()).toBe('Intern');
})

module.exports = Intern;