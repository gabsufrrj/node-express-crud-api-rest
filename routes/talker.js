const router = require('express').Router();
const { 
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  rateValidation,
  rateValidation2 } = require('../midldleware/talkerValidation');

const fs = require('../helpers/fs');

const file = 'talker.json';

router.get('/', async (_req, res) => {
  const talker = await fs.read(file);
  // if (!talker) return [];
  return res.status(200).json(talker);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await fs.read(file);
  const foundTalkerById = talker.find((e) => e.id === Number(id));
  if 
  (!foundTalkerById) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(foundTalkerById);
  });

router.post('/',
tokenValidation,
nameValidation,
ageValidation,
talkValidation,
rateValidation,
rateValidation2,
async (req, res) => {
  const { name, age, talk } = req.body;
  const talkersArray = await fs.read(file);
  const newTalker = {
    id: talkersArray.length + 1,
    name,
    age,
    talk,
  };
  try {
    const newTalkersArray = [...talkersArray, newTalker];
    await fs.write(file, JSON.stringify(newTalkersArray));
    res.status(201).json(newTalker);
  } catch (err) {
    console.log(err.message);
  }
});

router.put('/:id', 
tokenValidation,
nameValidation,
ageValidation,
talkValidation,
rateValidation,
rateValidation2,
async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkers = await fs.read(file);  

  try {
    const foundIndex = talkers.findIndex((e) => e.id === Number(id));
    talkers[foundIndex] = { id: Number(id), name, age, talk }; 
    await fs.write(file, JSON.stringify(talkers));
    res.status(200).json(talkers[foundIndex]);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
