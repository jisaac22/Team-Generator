const Engineer = require('../Engineer');

test("Sets GitHub for Engineer with the constructor", () => {
  const testValue = "github";
  const engineerTest = new Engineer("Jacob", 4, "email@email.com", testValue);
  expect(engineerTest.github).toBe(testValue);
});

test("getRole() function should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const engineerTest = new Engineer("Jacob", 4, "email@email.com", "github");
  expect(engineerTest.getRole()).toBe(testValue);
});

test("Gets github with getGithub() function", () => {
  const testValue = "github";
  const engineerTest = new Engineer("Jacob", 4, "email@email.com", testValue);
  expect(engineerTest.getGithub()).toBe(testValue);
});