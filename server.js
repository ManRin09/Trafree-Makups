const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'src', 'views')));
app.use('/scripts', express.static(path.join(__dirname, 'src', 'Scripts')));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Trafree Mockups corriendo en http://localhost:${PORT}`);
});
