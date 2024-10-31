const express = require('express');
const { addProblem,getProblem,updateProblem,deleteProblem } = require('../Controllers/addProblemController');

const router = express.Router();

router.post('/addproblem', addProblem);
router.get('/getproblem', getProblem);
router.patch('/updateproblem', updateProblem);
router.delete('/deleteproblem', deleteProblem);


module.exports = router;
