'use strict';

const express = require('express');
const router = express.Router();

const controller = require('./product.controller');

router.get('/',controller.fetchAll);
router.get('/:productId',controller.fetchById);
router.post('/',controller.create);
router.put('/:productId',controller.update);
router.delete('/:productId',controller.delete)

module.exports = router;