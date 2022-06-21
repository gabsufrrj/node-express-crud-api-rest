const fs = require('fs/promises');

const read = async (PATH) => {
  try {
    const data = await fs.readFile(PATH, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { read };