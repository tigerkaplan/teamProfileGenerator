const Intern = require("../lib/Intern");
const intern = new Intern("employee_1", "emp001", "employee_1@example.com", "UCLA");

test("Intern object properties", () => {
  expect(intern.name).toBe("employee_1"); // Intern Name
  expect(intern.id).toBe("emp001"); // Intern ID
  expect(intern.email).toBe("employee_1@example.com"); // Intern Email
  expect(intern.school).toBe("UCLA"); // Intern school
});



test("name via getName()", () => {
  expect(intern.getName()).toBe("employee_1");
});

test("ID via getId()", () => {
  expect(intern.getId()).toBe("emp001");
});

test("email via getEmail()", () => {
  expect(intern.getEmail()).toBe("employee_1@example.com");
});

test("getRole() should return \"Intern\"", () => {
  expect(intern.getRole()).toBe("Intern");
});

// test("Can set school via constructor", () => {
//   const testValue = "UCLA";
//   const e = new Intern("Foo", 1, "test@test.com", testValue);
//   expect(e.school).toBe(testValue);
// });

test("Can get school via getSchool()", () => {
  expect(intern.getSchool()).toBe("UCLA");
});
