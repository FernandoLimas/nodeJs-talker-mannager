const fs = require('fs').promises;

const editTalker = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const data = await fs.readFile('./talker.json', 'utf-8');
  const content = JSON.parse(data);

  const contentId = content.findIndex((talkers) => talkers.id.toString() === id);

  content[contentId] = { ...content[contentId], name, age, talk };

  await fs.writeFile('./talker.json', JSON.stringify(content));
  return res.status(200).json(content[contentId]);
};

module.exports = editTalker;
