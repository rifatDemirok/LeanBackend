// backend/controllers/authController.js
const Problem = require('../Models/problem');
const jwt = require('jsonwebtoken');

// Kullanıcı kaydı
exports.addProblem = async (req, res) => {
    const { id, title,description,type,status } = req.body;
    try {
       let problem = new Problem({
            id, title,description,type,status
        });

        await problem.save();

        const token = jwt.sign({ id: problem._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(201).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getProblem = async (req, res) => {
    try {
        const getProblems =await Problem.find();
        res.status(200).json({problems: getProblems})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
        
    }
}
exports.updateProblem = async (req, res) => {
 
    try {
        const {id} =req.params;
        const update =await Problem.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(update)
        
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: error.message });
        
    }
}

exports.deleteProblem = async (req, res) => {
    try {
        const {id} =req.params;
        await Problem.findByIdAndDelete(id);
        res.status(200).json({message:'Problem deleted successfully'})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
        
    }
}

