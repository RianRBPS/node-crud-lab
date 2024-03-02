const Student = require("../models/studentModel")

// Create Student
const createStudent = async (req, res) => {
    try {
        const _student = await Student.create(req.body)
        res.status(200).json(_student)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createStudent,
}

// const _student = await Student.create(req.body)
// res.status(200).json(_student)

// module.exports = {
//     createStudent,
// }


// READ METHOD
// Get All Students
const getAllStudents = async(req, res)=>{
    try {
      const _students = await Student.find({});
      res.status(200).json(_students);
    } catch (error) {
       res.status(500).json({ message: error.message });
    }
  }

