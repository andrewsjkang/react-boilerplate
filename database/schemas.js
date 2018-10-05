const createTodos = `CREATE TABLE IF NOT EXISTS todos (
  id SERIAL,
  task TEXT,
  PRIMARY KEY (id)
)`;

module.exports = {
  createTodos,
};
