const { Pool, Client } = require('pg');

const { createTodos } = require('./schemas');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dmi',
  password: 'password',
});
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'airdnb',
  password: 'password',
});

client.connect();

client.query(createTodos, (err, res) => {
  if (err) {
    console.log(err);
  }
});

module.exports = {
  client,
};
