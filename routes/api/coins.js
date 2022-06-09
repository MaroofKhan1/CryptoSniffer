const express = require('express');
const router = express.Router();
const coinsCtrl = require('../../controllers/api/coins');

router.post('/search', coinsCtrl.search)

router.get('/getCoins', coinsCtrl.coins)

router.post('/addCoin', coinsCtrl.addCoin)

module.exports = router;