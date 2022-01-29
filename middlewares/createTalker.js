const validaToken = require('./validaToken');

const validaName = async (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validaAge = async (req, res, next) => {
  const { age } = req.body;
  if (!age || age === '') {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const validaTalker = (req, res, next) => {
  const { talk } = req.body;
  if (!talk || talk === '') {
  return res.status(400).json({ 
    message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  next();
};

const watched = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;
  const validaWatched = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/; // [day]{2char}[month]{2char}[year]{4char}
    if (!watchedAt || watchedAt === '') {
      return res.status(400)
      .json({
         message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    if (validaWatched.test(watchedAt) === false) { // referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
      return res.status(400).json({
        message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
};

const rated = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;
  if (rate < 1 || rate > 5) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  if (!rate || rate === '') {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  next();
};

const createAddTalker = [
  validaToken,
  validaName,
  validaAge,
  validaTalker,
  rated,
  watched,
];

module.exports = createAddTalker;
