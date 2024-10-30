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
