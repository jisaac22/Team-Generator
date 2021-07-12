const Employee = require('../Employee');

test("Can instantiate Employee instance", () => {
  const employeeTest = new Employee();
  expect(typeof(employeeTest)).toBe("object");
});

test("Set name with constructor arguments", () => {
  const name = "Jacob";
  const employeeTest = new Employee(name);
  expect(employeeTest.name).toBe(name);
});

test("Sets id with constructor argument", () => {
  const testValue = 4;
  const employeeTest = new Employee("Jacob", testValue);
  expect(employeeTest.id).toBe(testValue);
});

test("Sets email with constructor argument", () => {
  const testValue = "email@email.com";
  const employeeTest = new Employee("Jacob", 4, testValue);
  expect(employeeTest.email).toBe(testValue);
});

test("Gets name with getName() function ", () => {
  const testValue = "Jacob";
  const employeeTest = new Employee(testValue);
  expect(employeeTest.getName()).toBe(testValue);
});

test("Gets id with getId() function", () => {
  const testValue = 4;
  const employeeTest = new Employee("Jacob", testValue);
  expect(employeeTest.getId()).toBe(testValue);
});

test("Gets email with getEmail() function", () => {
  const testValue = "email@amil.com";
  const employeeTest = new Employee("Jacob", 1, testValue);
  expect(employeeTest.getEmail()).toBe(testValue);
});

test("getRole() function should return \"Employee\"", () => {
  const testValue = "Employee";
  const employeeTest = new Employee("Jacob", 4, "email@email.com");
  expect(employeeTest.getRole()).toBe(testValue);
});