const fs = require('fs').promises;

const addNewTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const data = await fs.readFile('./talker.json', 'utf-8');
  const content = JSON.parse(data);
  const id = content[content.length - 1].id + 1;

  const addTalker = {
    id,
    name,
    age,
    talk,
  };
  content.push(addTalker);
  await fs.writeFile('./talker.json', JSON.stringify(content));
  return res.status(201).json(addTalker);
};

module.exports = addNewTalker;
