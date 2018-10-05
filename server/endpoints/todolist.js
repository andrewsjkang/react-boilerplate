const express = require('express');
const router = express.Router();

const preload = require('../data.json');

/* eslint-disable no-console */
router.get('/', (req, res) => {
  console.log('connection reached');
  res.status(200).json(preload.todos);
});

router.post('/', (req, res) => {
  console.log(req.body);
  preload.todos.push({ id: 3, date: 'today', task: req.body.task });
  res.status(200).end();
});

module.exports = router;
