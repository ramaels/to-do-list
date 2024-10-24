const formidable = require('formidable');
const { create, get, remove } = require('../model/todo');

exports.create = (req, res) => {
  const form = formidable({});
  form.parse(req, async (err, fields) => {
    const { description } = fields;
    if (err) {
      return res.status(500).json({ err });
    }
    if (!fields.description) {
      return res.status(400).json({ error: 'Description is required' });
    }
    try {
      const newTask = await create(description);
      return res.status(201).json(newTask.rows[0]);
    } catch (error) {
      return res.status(400).json({ error });
    }
  });
};

exports.read = async (req, res) => {
  try {
    const allTasks = await get();
    return res.status(200).json({ data: allTasks.rows });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

exports.removeTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await remove(Number(id));
    return res.status(200).json({ data: Number(id) });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};