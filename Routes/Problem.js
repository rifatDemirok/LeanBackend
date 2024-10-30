const express = require('express');
const { addProblem } = require('../Controllers/addProblemController');

const router = express.Router();

router.post('/addproblem', addProblem);

module.exports = router;
