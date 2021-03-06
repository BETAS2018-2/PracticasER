let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo express');
})

app.get('/dihola/:nombre', (req, res) => {
  let nombre = req.params.nombre;
  res.send(`Hola ${nombre} Bienvenido`);
});

app.listen(3000, () => {
  console.log("El servidor esta corriendo en el puerto 3000");
})