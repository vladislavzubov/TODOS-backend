const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const taskController = require('../controllers/task.controller');

// a simple test url to check that all of our files are communicating correctly.

router.get('/:username', taskController.taskAll);

router.post('/create', taskController.taskCreate);

router.put('/update', taskController.taskUpdate);

router.delete('/delete', taskController.taskDelete);


module.exports = router;