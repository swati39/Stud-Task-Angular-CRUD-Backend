const { findByIdAndUpdate } = require('../models/Student')
const Student = require('../models/Student')

const getAllStudents = async (req, res) => {
    try{
        const student = await Student.find({}) 
        res.status(200).json({ student})
    }catch(err){
         res.status(500).send(err.message)
         console.log(err.message)
    }
}

const createStudent= async(req, res) => {

    try{
        const student = await Student.create(req.body)
        res.status(201).json({student})
        console.log({student})

    }catch(err){
         res.status(500).send(err.message)
         console.log(err.message)
    }
}





const getStudent=async(req, res) => {
    try{
        const student = await Student.findOne({_id: req.params.id})
        if(!student){
            return res.status(404).json({msg: "ID Invalid"})
        }
        res.status(200).json({student})
        console.log({student})
    }catch(err){
        res.status(500).send(err.message)
        console.log(err.message)
    }
}

const deleteStudent=async(req, res) => {
    try{
        const student = await Student.findOneAndDelete({_id: req.params.id})
        if(!student){
            return res.status(404).json({msg: "ID Invalid"})
        }
        res.status(200).json({student})
        console.log({student})
    }catch(err){
        res.status(500).send(err.message)
    }
}

const updateStudent=async(req, res) => {
    try{
        const student = await Student.findOneAndUpdate({_id : req.params.id},req.body,{
            new: true,
            runValidators: true,
        })
        if(!student){
            return res.status(404).json({msg: "ID Invalid"})
        }
        res.status(200).json({msg:'Updated Sucessfully!'})
        console.log({student})
    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports={
    getAllStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
};