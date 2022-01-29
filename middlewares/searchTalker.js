const fs = require('fs').promises;

const searchTalker = async (req, res) => {
  const { q } = req.query;
  
    const data = await fs.readFile('./talker.json', 'utf-8');
    const content = JSON.parse(data);

    if (!q) return res.status(200).json(content);
    
    const getSearch = content.filter((talker) => talker.name.includes(q));
   
    return res.status(200).json(getSearch);
};

module.exports = searchTalker;
