const Intern = require("../Intern");

test("Sets school with constructor", () => {
  const testValue = "UTSA";
  const internTest = new Intern("Jacob", 4, "email@email.com", testValue);
  expect(internTest.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const internTest = new Intern("Jacob", 4, "email@email.com", "UTSA");
  expect(internTest.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UTSA";
  const internTest = new Intern("Jacob", 4, "email@email.com", testValue);
  expect(internTest.getSchool()).toBe(testValue);
});