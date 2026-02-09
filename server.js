const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ===== MENSAJE GLOBAL =====
let mensaje = "Hola ESP32 👋";

// ===== RUTA PARA ESP32 =====
app.get('/msg', (req, res) => {
  res.type('text/plain');
  res.send(mensaje);
});

// ===== RUTA PARA LA WEB =====
app.post('/msg', (req, res) => {
  const { texto } = req.body;

  if (!texto || texto.length === 0) {
    return res.status(400).json({ error: 'Texto vacío' });
  }

  mensaje = texto;
  res.json({ ok: true, mensaje });
});

// ===== INICIAR SERVIDOR =====
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
