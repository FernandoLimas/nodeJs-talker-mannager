const fs = require('fs').promises;

const talkerId = async (req, res) => {
  const data = await fs.readFile('./talker.json', 'utf-8');
  const content = JSON.parse(data);
  const { id } = req.params;
  const talkerById = content.find((talker) => talker.id === parseInt(id, 10));
  if (!talkerById) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talkerById);
};

module.exports = talkerId;
