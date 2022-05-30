const express = require('express');

//CONFIG PUERTO
const port = process.env.PORT || 4200;

//RUTAS
const computadora_route = require('./routes/computadora')

//INICIALIZAR EXPRESS
const app = express();

//CONFIG SERVER
app.use(express.json());

//USO DE RUTA
app.use('/api', computadora_route);

//CONFIG APP
app.listen(port, function() {
    console.log("Servidor esta corriendo en el puerto: " + port);
});