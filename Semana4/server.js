const express = require('express');
const open = require('open');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
  open('http://localhost:3000').catch(() => {});
});
