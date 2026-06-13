const express = require('express');
const app = express();

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Saludo
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Mensaje con parámetro
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Registro (actividad semana 6)
app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });

});

// Incidencia
app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});

// Reporte (opcional)
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// SOLO UN listen
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});