const express = require('express');
const router = express.Router();
const bayController = require('../controllers/bayController');

router.post('/bay/create', bayController.createBay);
router.get('/bay/getall', bayController.getAllBays);
router.get('/bay/getbyid', bayController.getBayById);
router.put('/bay/update', bayController.updateBay);
router.delete('/bay/delete', bayController.deleteBay);

module.exports = router;
