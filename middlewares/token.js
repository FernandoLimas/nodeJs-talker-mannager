const gToken = () => Math.random().toString(30).substring(2);
const token = () => {
  const tokenpass = (gToken() + gToken()).slice(0, 16);
  return tokenpass;
};
const generator = (_req, res) => {
  res.status(200).json({ token: token() });
}; 

module.exports = generator;
