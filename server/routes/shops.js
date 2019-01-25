const express = require('express');
const router = express.Router();
const Shop = require('../models/shop');

router.get('', function(req, res) {
    Shop.find({}, function(err, foundShops) {
        res.json(foundShops);
    });
});

router.get('/:id', function(req, res) {
    const shopId = req.params.id;

    Shop.findById(shopId, function(err, foundShop) {
        if (err) {
            res.status(422).send({errors: [{title: 'Shop Error', detail: 'Could not find shop'}]});
        }
        res.json(foundShop);
    });
});

module.exports = router;