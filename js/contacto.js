//Validación del formulario de contacto//

function validarFormulario(event) {
    event.preventDefault(); // Detener el envío del formulario
  
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
  
    if (fname.value === "") {
      alert("Por favor, ingrese su nombre");
      fname.focus();
      return false;
    }
  
    if (lname.value === "") {
      alert("Por favor, ingrese su apellido");
      lname.focus();
      return false;
    }
  
    if (email.value === "") {
      alert("Por favor, ingrese su correo electrónico");
      email.focus();
      return false;
    } else if (!validarEmail(email.value)) {
      alert("Por favor, ingrese un correo electrónico válido");
      email.focus();
      return false;
    }
  
    if (subject.value === "") {
      alert("Por favor, ingrese un asunto");
      subject.focus();
      return false;
    }
  
    // Si llegamos a este punto, el formulario es válido
    alert("El formulario se envió correctamente. En breve nos comunicaremos.");
    return true;
  }
  
  function validarEmail(email) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(email);
  }
  
const formulario = document.getElementById("contact-form");
formulario.addEventListener("submit", validarFormulario);
