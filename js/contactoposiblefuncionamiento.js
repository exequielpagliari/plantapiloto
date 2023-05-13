//Validación del formulario de contacto//







function validarFormulario() {
    const fname = document.getElementById("finame")
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const form = document.getElementById("contact-form")
    let validData = true


    if (fname.value == "") {
        fname.setAttribute('placeholder', "Por favor, ingrese su nombre");
        fname.focus();
        validData = false
    }



    if (lname.value == "") {
        lname.setAttribute('placeholder', "Por favor, ingrese su apellido");
        lname.focus();
        validData = false
    }


    for (arroba in email){ arroba == `@` } 
    {
        email.setAttribute('placeholder', "Por favor, ingrese su email");
        email.focus();
        validData = true
    }


    if (subject.value == "") {
        subject.setAttribute('placeholder', "Por favor, ingrese su mensaje");
        subject.focus();
        validData = false
    }

    form.setAttribute(`onsubmit`, `true`)
    form.setAttribute(`action`, `https://formsubmit.co/exepa@hotmail.com`)
    form.setAttribute(`method`, `post`)


}







