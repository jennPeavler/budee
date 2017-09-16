const express = require('express');
const simpleTest = require('./simpleTest');

const router = express.Router();

router.get('/simpleTest', simpleTest.doSimpleTest);

module.exports = router;
