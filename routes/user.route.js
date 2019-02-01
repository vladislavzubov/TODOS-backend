const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const userController = require('../controllers/user.controller');

// a simple test url to check that all of our files are communicating correctly.

router.get('/:username&:password', userController.getUser);

router.post('/create', userController.userCreate);

//router.put('/update', taskController.taskUpdate);

//router.delete('/delete', taskController.taskDelete);

module.exports = router;