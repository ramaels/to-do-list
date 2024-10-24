const pool = require('./database');

const create = async (description) => {
  await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]);
};

const get = async () => {
  await pool.query('SELECT * FROM todo RETURNING *');
};

const remove = async (id) => {
  await pool.query('DELETE FROM todo WHERE todo_id = $1 RETURNING *', [id]);
};

module.exports = { create, get, remove };