const express = require('express');
const bodyParser = require('body-parser');

const talker = require('./middlewares/talker');// 1
const talkerId = require('./middlewares/talkerId');// 2
const { checkEmail, checkPassw } = require('./middlewares/login');// 3
const token = require('./middlewares/token');
const createAddTalker = require('./middlewares/createTalker');// 4
const addNewTalker = require('./middlewares/addNewTalker');// 4
const editTalker = require('./middlewares/editTalker');// 5
const validaToken = require('./middlewares/validaToken');
const deleteTalker = require('./middlewares/deleteTalker');// 6;
const searchTalker = require('./middlewares/searchTalker');

const app = express();

app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
// // não remova esse endpoint, e para o avaliador funcionar
// app.get('/', (_request, response) => {
//   response.status(HTTP_OK_STATUS).send();
// });

// getAllTalkers - 1
app.get('/talker', talker);
// searchTalker - 7
app.get('/talker/search', validaToken, searchTalker);
// getTallkersById - 2
app.get('/talker/:id', talkerId);
// login/ token - 3
app.post('/login', checkEmail, checkPassw, token);
// createTalker - 4
app.post('/talker', createAddTalker, addNewTalker);
// editTalker - 5
app.put('/talker/:id', createAddTalker, editTalker);
// deleteTalker - 6
app.delete('/talker/:id', validaToken, deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
