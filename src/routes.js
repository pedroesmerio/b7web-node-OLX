const express = require('express');
const router = express.Router();

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const AdsController = require('./controllers/AdsController');

router.get('/ping', (req, res) => {
  res.json({ pong: true });
});

router.get('/states', UserController.getStates);

router.get('/user/signin', AuthController.signin);
router.get('/user/signup', AuthController.signup);

router.get('/user/me', UserController.info);
router.put('/user/me', UserController.editAction);

router.get('/categories', AdsController.getCategories);

router.post('/ad/add', AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.post('/ad/:id', AdsController.editAction);

module.exports = router;
