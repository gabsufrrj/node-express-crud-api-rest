const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  const regexExpressionForEmailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  // método retirado de https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  if (!email.match(regexExpressionForEmailValidation)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });

  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  next();
};

module.exports = loginValidation;