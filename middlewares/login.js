const checkEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/; 
  const emailGex = emailRegex.test(email); 
  if ((!email) || (email === '')) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (emailGex === false) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const checkPassw = (req, res, next) => {
  const { password } = req.body;
  if ((!password) || (password === '')) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

// const checkToken = (req, res, next) => {
//   const getToken = req.headers.authorization;
//   if (!getToken) {
//     return res.status(401).json({ message: 'Token não encontrado' });
//   }
//   if (getToken.length < 16) {
//     return res.status(401).json({ message: 'Token inválido' });
//   }
//   next();
// };

module.exports = {
  checkEmail,
  checkPassw,
  // checkToken,
};
