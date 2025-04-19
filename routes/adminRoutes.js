const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/admin/login', adminController.adminLogin);
router.post('/admin/create', adminController.createAdmin);

module.exports = router;
