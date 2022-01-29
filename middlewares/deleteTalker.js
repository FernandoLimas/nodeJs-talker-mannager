const fs = require('fs').promises;

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile('./talker.json', 'utf-8');
  const content = JSON.parse(data);

  const contentId = content.findIndex((talker) => talker.id.toString() === id);

  content.splice(contentId, 1);
  await fs.writeFile('./talker.json', JSON.stringify(content));
  return res.status(204).end();
};

module.exports = deleteTalker;
