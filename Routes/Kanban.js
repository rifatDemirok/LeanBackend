const express = require('express');
const { addKanban,getKanban,updateKanban,deleteKanban } = require('../Controllers/kanbanController');

const router = express.Router();

router.post('/addKanban', addKanban);
router.get('/getKanban', getKanban);
router.patch('/updateKanban/:id', updateKanban);
router.delete('/deleteKanban/:id', deleteKanban);


module.exports = router;
