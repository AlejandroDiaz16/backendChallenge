// controller for endpoints
const express = require('express');
const service = require('./service');
const router = express.Router();

router.get( '/', (req, res) => {
    res.send('')
})

module.exports = router;
