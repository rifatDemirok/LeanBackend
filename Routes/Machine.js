const express = require('express');
const { addMachine,getMachine,updateMachine,deleteMachine } = require('../Controllers/machineController');

const router = express.Router();

router.post('/addMachine', addMachine);
router.get('/getMachine', getMachine);
router.patch('/updateMachine/:id', updateMachine);
router.delete('/deleteMachine:id', deleteMachine);


module.exports = router;
