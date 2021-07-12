const Manager = require("../Manager");
const Employee = require("../Employee");

test("Sets office number with constructor argument", () => {
  const testValue = 4;
  const managerTest = new Manager("Jacob", 4, "email@email.com", testValue);
  expect(managerTest.officeNumber).toBe(testValue);
});

test('getRole() function should return "Manager"', () => {
  const testValue = "Manager";
  const managerTest = new Manager("Jacob", 4, "email@email.com", 4);
  expect(managerTest.getRole()).toBe(testValue);
});

test("Gets office number with getOffice() function", () => {
  const testValue = 4;
  const managerTest = new Manager("Jacob", 4, "email@email.com", testValue);
  expect(managerTest.getOfficeNumber()).toBe(testValue);
});