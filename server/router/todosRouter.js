const express = require('express');

const todoCtrl = require('../controllers/todosController');

const router = express.Router();

router.post('/', todoCtrl.createItem);
router.get('/', todoCtrl.getTodos);

module.exports = router;