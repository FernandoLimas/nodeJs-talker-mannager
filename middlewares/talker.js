const fs = require('fs').promises;

const getTalkers = async (_req, res) => {
  const data = await fs.readFile('./talker.json', 'utf-8');
  // Poderia ser feito com o .then 
  const content = JSON.parse(data);
  if (!data) return res.status(200).json([]);
  return res.status(200).json(content);   
};

module.exports = getTalkers;
