const Engineer = require("../lib/Engineer");
const engineer = new Engineer("employee_1", "emp001", "employee_1@example.com",  "engineer_11", "organization");



// Engineer Object


test("Engineer profile", () => {
  expect(engineer.name).toBe("employee_1"); // Engineer Name
  expect(engineer.id).toBe("emp001"); // Engineer ID
  expect(engineer.email).toBe("employee_1@example.com"); // Engineer Email
  expect(engineer.github).toBe("engineer_11"); // Engineer Github account
  expect(engineer.getGithub()).toBe("engineer_11"); // Engineer Github Username
});



test("name via getName()", () => {
  expect(engineer.getName()).toBe("employee_1");
});

test("ID via getId()", () => {
  expect(engineer.getId()).toBe("emp001");
});

test("email via getEmail()", () => {
  expect(engineer.getEmail()).toBe("employee_1@example.com");
});

// engineer  

// test("GitHUb account via constructor", () => {
//   expect(engineer.github).toBe("organization");
// });

test('getRole() should return "Engineer"', () => {
  expect(engineer.getRole()).toBe("Engineer");
});

test("GitHub username via getGithub()", () => {
  expect(engineer.getGithub()).toBe("engineer_11");
});

