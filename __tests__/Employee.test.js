test('creates an employee object', () => {
  const employee = new Employee('Bob');

  expect(this.name).toBe('Bob');
  expect(this.id).toBe(expect.any(Number));
  expect(this.email).toBe(expect.stringContaining(string));
  expect(this.role).toBe
});
