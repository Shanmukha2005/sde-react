const express = require('express');
const router = express.Router();
router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;

  try {

    res.status(201).json({ message: 'Contact added' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {

    res.json({ contacts, total });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {

    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
