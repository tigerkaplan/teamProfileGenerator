const Manager = require("../lib/Manager");
const manager = new Manager("employee_1", "emp001", "employee_1@example.com",  "mng001");

// Manager Object


test("Manager profile", () => {
  expect(manager.name).toBe("employee_1"); // Manager Name
  expect(manager.id).toBe("emp001"); // Manager ID
  expect(manager.email).toBe("employee_1@example.com"); // Manager Email
  expect(manager.officeNumber).toBe("mng001"); // Manager Office Number
  
});



test("name via getName()", () => {
  expect(manager.getName()).toBe("employee_1");
});

test("ID via getId()", () => {
  expect(manager.getId()).toBe("emp001");
});

test("email via getEmail()", () => {
  expect(manager.getEmail()).toBe("employee_1@example.com");
});

// manager

test('getRole() should return "Manager"', () => {
  expect(manager.getRole()).toBe("Manager"); // Manager Role
});

test('getRole() should return "Manager"', () => {
  expect(manager.getOfficeNumber()).toBe("mng001"); // Manager Id
});


