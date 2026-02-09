function enviar() {
  const texto = document.getElementById('texto').value;
  const estado = document.getElementById('estado');

  fetch('/msg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ texto })
  })
  .then(res => res.json())
  .then(data => {
    estado.textContent = "Mensaje enviado ✔️";
  })
  .catch(err => {
    estado.textContent = "Error al enviar ❌";
  });
}
