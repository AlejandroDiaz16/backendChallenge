// controller for endpoints
const express = require('express');
const productService = require('./service');
const router = express.Router();

// get all products with charges
router.get( '/getAllProducts', (req, res) => {
    const resp = productService.getAllProducts();
    res.send(resp);
})

module.exports = router;
