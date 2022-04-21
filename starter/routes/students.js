const express = require('express');
const router = express.Router();
const {
    getAllStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
} = require('../controllers/students')

//Get All Students
router.route('/').get(getAllStudents)

//Create a new Student
router.route('/').post(createStudent)

//Get a new Student by its ID
router.route('/:id').get(getStudent)

//Update a Student by its ID
router.route('/:id').put(updateStudent)

//Delete a Student by its ID
router.route('/:id').delete(deleteStudent)


module.exports = router;
