const Employee = require("../lib/Employee");
const employee = new Employee ("employee_1", "emp001", "employee_1@example.com")

// test
// Employee Object

test("Employee profile", () => {
  expect(typeof employee).toBe("object"); // Employee  object
  expect(employee.name).toBe("employee_1"); // Employee Name
  expect(employee.id).toBe("emp001"); // Employee ID
  expect(employee.email).toBe("employee_1@example.com"); // Employee Email
});

test("name via getName()", () => {
  expect(employee.getName()).toBe("employee_1");
});

test("ID via getId()", () => {
  expect(employee.getId()).toBe("emp001");
});

test("email via getEmail()", () => {
  expect(employee.getEmail()).toBe("employee_1@example.com");
});

test('getRole() should return "Employee"', () => {
  expect(employee.getRole()).toBe("Employee");
});
