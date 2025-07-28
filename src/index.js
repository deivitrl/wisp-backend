const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("¡Backend funcionando!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(\`Servidor corriendo en puerto \${PORT}\`);
});
