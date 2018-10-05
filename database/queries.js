const { client } = require('./index');

const getAllTodos = callback => {
  const queryStr = `SELECT * FROM todos`;
  client.query(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const addTodo = (task, callback) => {
  const queryStr = `INSERT INTO todos (task) VALUES ('${task}')`;
  client.query(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  getAllTodos,
  addTodo,
};
