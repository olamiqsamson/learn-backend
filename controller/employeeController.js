const { Router } = require('express');
const Employees = require('../models/employees');


//get all employees -/employees
const getEmployees = (req, res) =>{
    // res.send('get employee');
    Employees.find().then((data) =>{
        res.status(200).render('index',{employees:data})
    })
    .catch((err) => console.log(err))
}

//get a single employee /employees/:id - req.params
const getSingleEmployee = (req, res) =>{
    const {id} = req.params
    Employees.findById({ _id: id}).then((data) => {
        res.status(200).render('details',{employee: data})
    })
    .catch((err) => console.log(err));
}

//create a new employee /employees - req.body
const createEmployee = (req, res) =>{
    // res.send('create employee');
    const { name, role, age } = req.body
    const employee = new Employees(req.body)
    employee.save().then((data)=>{
        res.redirect('employees')
    })
    .catch((err)=>{
        console.log(err);
    })
}
//update an employee /employees/:id
const updateEmployee = (req, res) =>{
    const { id } = req.params;
    Employees.findByIdAndUpdate({_id:id}, req.body,{new: true, runValidators: true,
    })
    .then((data) => {
        res.status(200).json({msg: 'employee updated', data});
    })
    .catch((err) => console.log(err));
}

//delete an employee /employees/:id
const deleteEmployee = (req, res) =>{
    const {id} = req.params
    Employees.findByIdAndDelete({ _id: id}).then((data) =>{
        res.status(200).json({redirect: '/employees'})
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {
    getEmployees,
    getSingleEmployee,
    createEmployee,
    deleteEmployee,
    updateEmployee,
}