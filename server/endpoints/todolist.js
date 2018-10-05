const express = require('express');
const router = express.Router();

const db = require('../../database/queries');

/* eslint-disable no-console */
router.get('/', (req, res) => {
  db.getAllTodos((err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).json(result.rows);
    }
  });
});

router.post('/', (req, res) => {
  /* eslint-disable no-unused-vars */
  db.addTodo(req.body.task, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.status(201).end();
    }
  });
});

module.exports = router;
