
const express = require('express');
const router = express.Router();
const employee = require('../controllers/employeeController.js');

// Add a new Employee
router.post('/employee', employee.create);

// Retrieve all Employee
router.get('/employee', employee.getAllData);

// Retrieve a single Employee with EmployeeId
router.get('/employee/get/:id', employee.getOneEmployeeData);

// Update an Employee with EmployeeId
router.put('/employee/update/:id', employee.updateEmployeeData);

// Delete an Employee with EmployeeId
router.delete('/employee/delete/:id', employee.deleteEmployeeData);

console.log("Router is running");

module.exports = router;
