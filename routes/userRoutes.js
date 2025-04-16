const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user/create', userController.createUser);
router.get('/user/getall', userController.getAllUsers);
router.get('/user/getbyid', userController.getUserById);
router.put('/user/update', userController.updateUser);
router.delete('/user/delete', userController.deleteUser);
router.post('/user/login', userController.loginUser);

module.exports = router;
