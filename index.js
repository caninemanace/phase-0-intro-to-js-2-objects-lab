// Write your solution in this file!
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


console.log("Original Employee:", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Engineer");
console.log("After Non-Destructive Update:", updatedEmployee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Manager");
console.log("After Destructive Update:", employee);

const newEmployeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("After Non-Destructive Delete:", newEmployeeWithoutAddress);

destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log("After Destructive Delete:", employee);
