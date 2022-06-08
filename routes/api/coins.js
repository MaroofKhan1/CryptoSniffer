const express = require('express');
const router = express.Router();
const coinsCtrl = require('../../controllers/api/coins');

router.post('/search', coinsCtrl.search)



module.exports = router;