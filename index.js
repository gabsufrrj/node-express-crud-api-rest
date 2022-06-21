const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/talker');
const loginValidation = require('./midldleware/loginValidation');
const loginRouter = require('./routes/login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', router);

app.use('/login', loginValidation, loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});

//
