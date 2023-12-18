const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');
const foodController = require('../controllers/foodsController');
const authController = require('../controllers/authController');
const axiosController = require('../controllers/axiosController');
const verifytoken = require('../middleware/verifytoken');

router.get('/', sampleController.methodGet)
router.post('/', sampleController.methodPost)
router.put('/', sampleController.methodPut)
router.delete('/', sampleController.methodDelete)

// foods
router.post('/foods', foodController.methodPost);
router.get('/foods', verifytoken, foodController.methodGet);
router.get('/foods/:id', foodController.methodGetId);
router.put('/foods/:id', foodController.methodPut);
router.delete('/foods/:id', foodController.methodDelete);

router.post('/foods/upload', foodController.methodUploadFoods);
router.post('/foods/search', foodController.methodGetCondition);

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.get('/axios/fetch', axiosController.fetchApi);
router.post('/axios/post', axiosController.postData);
router.put('/axios/update/:id', axiosController.updateData);
router.delete('/axios/delete/:id', axiosController.deleteData);

module.exports = router;