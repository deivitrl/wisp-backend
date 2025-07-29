require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor WISP activo 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
