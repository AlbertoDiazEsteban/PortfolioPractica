// const enviarBtn = document.querySelector('.btn-enviar button');
// enviarBtn.addEventListener('click', function(event) {
//   event.preventDefault(); // previene el comportamiento por defecto del botón

//   const nombre = document.querySelector('#nombre').value;
//   alert('Hi ' + ${nombre}  + '&#128153;!');
// });



function enviarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const mail = document.getElementById('mail').value;
  const comentarios = document.getElementById('comentarios').value;

  // Si todos los campos están rellenados
  if (nombre !== '' && mail !== '' && comentarios !== '') {
    alert(`Thank you ${nombre}! ❤️😊`);
  }
  // Si algún campo está vacío
  else {
    const mensajesTristes = ['Oops! 😢 Please fill in all the required fields.', 'Uh oh! 😔 You forgot to fill in some fields.', 'Sorry! 😞 We need all the fields filled in.'];
    const mensajeTriste = mensajesTristes[Math.floor(Math.random() * mensajesTristes.length)];
    alert(`${mensajeTriste} 💔`);
  }
}

document.querySelector('.btn-enviar').addEventListener('click', enviarFormulario);
