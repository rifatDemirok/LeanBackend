const express = require('express');
const { addProblem,getProblem,updateProblem,deleteProblem } = require('../Controllers/problemController');

const router = express.Router();

router.post('/addProblem', addProblem);
router.get('/getProblem', getProblem);
router.patch('/updateProblem/:id', updateProblem);
router.delete('/deleteProblem:id', deleteProblem);


module.exports = router;
