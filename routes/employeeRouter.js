const express = require('express')
const router = express.Router()
const {
    getEmployees,
    getSingleEmployee,
    deleteEmployee,
    updateEmployee,
    createEmployee,
} = require("../controller/employeeController")

router.get('/employees',getEmployees);
router.get('/employees/:id',getSingleEmployee);
router.post('/employees', createEmployee);
router.delete('/employees/:id', deleteEmployee);
router.patch('/employees/:id', updateEmployee);

module.exports = router;