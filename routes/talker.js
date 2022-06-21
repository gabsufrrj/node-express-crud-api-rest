const router = require('express').Router();

const fs = require('../helpers/fs');

router.get('/', async (_req, res) => {
  const talker = await fs.read('talker.json');
  // if (!talker) return [];
  return res.status(200).json(talker);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await fs.read('talker.json');
  const foundTalkerById = talker.find((e) => e.id === Number(id));
  if 
  (!foundTalkerById) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(foundTalkerById);
  });

module.exports = router;