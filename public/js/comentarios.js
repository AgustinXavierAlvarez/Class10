var saludo = document.getElementById("saludo");
var nombre= document.getElementById("nombre");
var email= document.getElementById("email");
var password= document.getElementById("password");
var repeatPass= document.getElementById("repeat-password");
var edad= document.getElementById("edad");
var telefono= document.getElementById("telefono");
var direccion= document.getElementById("direccion");
var dni= document.getElementById("dni");
var button= document.getElementById("boton-enviar");
var parrafos = document.getElementsByClassName("error-message");
var regex = /[!@#$%^&*()_+=-`~[\]{}|;:'",<.>/?\\]/;

// Validación de campos de texto

// Validación del nombre

nombre.addEventListener("blur", function() {
    if (nombre.value.length <= 6) {
        nombre.classList.add("input-error");
        nombre.classList.remove("input-correct");
        nombre.previousElementSibling.style.color = "#f00";
        parrafos[0].classList.remove("visual-hidden");
    }
    else {
        nombre.classList.remove("input-error");
        nombre.classList.add("input-correct");
        parrafos[0].classList.add("visual-hidden");
        nombre.previousElementSibling.style.color = "#000";
    }
});

nombre.addEventListener("focus", function() {
    if (nombre.value.length <= 6) {
        nombre.classList.remove("input-correct");
        nombre.previousElementSibling.style.color = "#000";
    } else {
        nombre.classList.add("input-correct");
        nombre.previousElementSibling.style.color = "#000";
    }
});

// Validación del email

email.addEventListener("blur", function() {
    if (email.value.length <= 6 && !email.value.includes("@")) {
        email.classList.add("input-error");
        email.classList.remove("input-correct");
        email.previousElementSibling.style.color = "#f00";
        parrafos[1].classList.remove("visual-hidden");
    } else {
        email.classList.remove("input-error");
        email.classList.add("input-correct");
        email.previousElementSibling.style.color = "#000";
        parrafos[1].classList.add("visual-hidden");
    }
});

email.addEventListener("focus", function() {
    if (email.value.length <= 6) {
        email.classList.remove("input-correct");
        email.classList.add("input-error");
        email.previousElementSibling.style.color = "#000";
    } else {
        email.classList.add("input-correct");
        email.classList.remove("input-error");
        email.previousElementSibling.style.color = "#000";
    }
});

// Validación de la contraseña

password.addEventListener("blur", function() {
    console.log(regex.test(password.value));
    if (password.value.length <= 8 || regex.test(password.value)) {
        password.classList.add("input-error");
        password.classList.remove("input-correct");
        password.previousElementSibling.style.color = "#f00";
        parrafos[2].classList.remove("visual-hidden");
    } else {
        password.classList.remove("input-error");
        password.classList.add("input-correct");
        password.previousElementSibling.style.color = "#000";
        parrafos[2].classList.add("visual-hidden");
    }
});

password.addEventListener("focus", function() {
    if (password.value.length <= 8 || regex.test(password.value)) {
        password.classList.remove("input-correct");
        password.previousElementSibling.style.color = "#000";
    } else {
        password.classList.add("input-correct");
        password.previousElementSibling.style.color = "#000";
    }
});

//Validarción de la repetición de contraseña

repeatPass.addEventListener("blur", function() {
    if (repeatPass.value !== password.value) {
        repeatPass.classList.add("input-error");
        repeatPass.classList.remove("input-correct");
        repeatPass.previousElementSibling.style.color = "#f00";
        parrafos[3].classList.remove("visual-hidden");
    } else {
        repeatPass.classList.remove("input-error");
        repeatPass.classList.add("input-correct");
        repeatPass.previousElementSibling.style.color = "#000";
        parrafos[3].classList.add("visual-hidden");
    }
});

repeatPass.addEventListener("focus", function() {
    if (repeatPass.value !== password.value) {
        repeatPass.classList.remove("input-correct");
        repeatPass.classList.add("input-error");
        repeatPass.previousElementSibling.style.color = "#000";
    } else {
        repeatPass.classList.add("input-correct");
        repeatPass.previousElementSibling.style.color = "#000";
    }
});

// Validación de los campos restantes (edad, teléfono, dirección, ciudad, código postal, DNI)

edad.addEventListener("blur", function() {
    if (edad.value.length < 1 || edad.value < 18) {
        edad.classList.add("input-error");
        edad.classList.remove("input-correct");
        edad.previousElementSibling.style.color = "#f00";
        parrafos[4].classList.remove("visual-hidden");
    } else {
        edad.classList.remove("input-error");
        edad.classList.add("input-correct");
        edad.previousElementSibling.style.color = "#000";
        parrafos[4].classList.add("visual-hidden");
    }
});

edad.addEventListener("focus", function() {
    if (edad.value.length < 1 || edad.value < 18) {
        edad.classList.remove("input-correct");
        edad.previousElementSibling.style.color = "#000";
    } else {
        edad.classList.add("input-correct");
        edad.previousElementSibling.style.color = "#000";
    }
});

// Validación del teléfono  

telefono.addEventListener("blur", function() {
    if (telefono.value.length < 1 || isNaN(telefono.value) || telefono.value.length < 7) {
        telefono.classList.add("input-error");
        telefono.classList.remove("input-correct");
        telefono.previousElementSibling.style.color = "#f00";
        parrafos[5].classList.remove("visual-hidden");
    } else {
        telefono.classList.remove("input-error");
        telefono.classList.add("input-correct");
        telefono.previousElementSibling.style.color = "#000";
        parrafos[5].classList.add("visual-hidden");
    }
}); 

telefono.addEventListener("focus", function() {
    if (telefono.value.length < 1 || isNaN(telefono.value) || telefono.value.length < 7) {
        telefono.classList.remove("input-correct");
        telefono.previousElementSibling.style.color = "#000";
    } else {
        telefono.classList.add("input-correct");
        telefono.previousElementSibling.style.color = "#000";
    }
});

// Validación de la dirección

direccion.addEventListener("blur", function() {
    if (direccion.value.length < 1) {
        direccion.classList.add("input-error");
        direccion.classList.remove("input-correct");
        direccion.previousElementSibling.style.color = "#f00";
        parrafos[6].classList.remove("visual-hidden");
    } else {
        direccion.classList.remove("input-error");
        direccion.classList.add("input-correct");
        direccion.previousElementSibling.style.color = "#000";
        parrafos[6].classList.add("visual-hidden");
    }
});

direccion.addEventListener("focus", function() {
    if (direccion.value.length < 1) {
        direccion.classList.remove("input-correct");
        direccion.previousElementSibling.style.color = "#000";
    } else {
        direccion.classList.add("input-correct");
        direccion.previousElementSibling.style.color = "#000";
    }
});

// Validación del DNI

dni.addEventListener("blur", function() {
    const dniRegex = /^\d{7,8}$/.test(dni.value);
    if (!dniRegex) {
        dni.classList.add("input-error");
        dni.classList.remove("input-correct");
        dni.previousElementSibling.style.color = "#f00";
        parrafos[7].classList.remove("visual-hidden");
    } else {
        dni.classList.remove("input-error");
        dni.classList.add("input-correct");
        dni.previousElementSibling.style.color = "#000";
        parrafos[7].classList.add("visual-hidden");
    }
});

dni.addEventListener("focus", function() {
    const dniRegex = /^\d{7,8}$/.test(dni.value);
    if (!dniRegex) {
        dni.classList.remove("input-correct");
        dni.previousElementSibling.style.color = "#000";
    } else {
        dni.classList.add("input-correct");
        dni.previousElementSibling.style.color = "#000";
    }
});


// Saludo al usuario

nombre.addEventListener("keyup", function() {
    console.log(saludo.textContent);
    if (nombre.value.length > 0) {
        saludo.textContent = "Hola, " + nombre.value + "!";
        saludo.style.color = "#000";
    } else {
        saludo.textContent = "¡Hola!";
    }
});


// Creo función para enviar el formulario
// Utilizo fetch para enviar los datos a un endpoint 

async function enviarFormulario(datos) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        const data = await response.json();
        if (response.ok) {
            mostrarModal("¡Suscripción exitosa! :)", data);
            localStorage.setItem('datosFormulario', JSON.stringify(datos));
        } else {
            mostrarModal("Error en la suscripción", data);
        }
    } catch (error) {
        mostrarModal("Error de red", { error: error.message });
    }
}

// Crea un modal para mostrar los datos del formulario

function mostrarModal(titulo, datos) {
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0'; modal.style.left = '0';
    modal.style.width = '100vw'; 
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex'; 
    modal.style.alignItems = 'center'; 
    modal.style.justifyContent = 'center';
    modal.innerHTML = `
        <div style="background:#fff;padding:2em;border-radius:10px;max-width:400px">
            <h2>${titulo}</h2>
            <pre style="text-align:left">${JSON.stringify(datos, null, 2)}</pre>
            <button id="cerrar-modal">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('cerrar-modal').onclick = () => modal.remove();
}

// Modifica el click del botón para usar la funcion enviarFormulario

button.addEventListener("click", function(e) {
    e.preventDefault();
    if(
        (nombre.value.length > 6)&&
        (email.value.length > 6 && email.value.includes("@")) &&
        (password.value.length > 8 && !regex.test(password.value)) &&
        (repeatPass.value === password.value) &&
        (edad.value.length >= 1 && edad.value >= 18) &&
        (telefono.value.length >= 7 && !isNaN(telefono.value)) &&
        (direccion.value.length >= 1) &&
        (dni.value.length >= 7 && dni.value.length <= 8)
    ) {
        const datos = {
            nombre: nombre.value,
            email: email.value,
            password: password.value,
            repeatPass: repeatPass.value,
            edad: edad.value,
            telefono: telefono.value,
            direccion: direccion.value,
            dni: dni.value
        };
        enviarFormulario(datos);
        nombre.value = "";
        email.value = "";
        password.value = "";
        repeatPass.value = "";
        edad.value = "";
        telefono.value = "";
        direccion.value = "";
        dni.value = "";
        saludo.textContent = "¡Hola!";
        nombre.classList.remove("input-correct");
        email.classList.remove("input-correct");
        password.classList.remove("input-correct");
        repeatPass.classList.remove("input-correct");
        edad.classList.remove("input-correct");
        telefono.classList.remove("input-correct");
        direccion.classList.remove("input-correct");
        dni.classList.remove("input-correct");
    } else {
        mostrarModal("Por favor, completa todos los campos correctamente.", {});
    }
});



























// button.addEventListener("click", function(e) {
//     e.preventDefault();
//     if((nombre.value.length > 6)&&
//     (email.value.length > 6 && email.value.includes("@")) &&
//     (password.value.length > 8 && !regex.test(password.value)) &&
//     (repeatPass.value === password.value) &&
//     (edad.value.length >= 1 && edad.value >= 18) &&
//     (telefono.value.length >= 7 && !isNaN(telefono.value)) &&
//     (direccion.value.length >= 1) &&
//     (dni.value.length >= 7 && dni.value.length <= 8)
//     ) {
//         alert("Formulario enviado correctamente");
//         nombre.value = "";
//         email.value = "";
//         password.value = "";
//         repeatPass.value = "";
//         edad.value = "";
//         telefono.value = "";
//         direccion.value = "";
//         dni.value = "";
//         nombre.classList.remove("input-correct");
//         email.classList.remove("input-correct");
//         password.classList.remove("input-correct");
//         repeatPass.classList.remove("input-correct");
//         edad.classList.remove("input-correct");
//         telefono.classList.remove("input-correct");
//         direccion.classList.remove("input-correct");
//         dni.classList.remove("input-correct");
//         e.c
//     }
//     else {
//         alert("Por favor, completa todos los campos correctamente.");
//     }
    
// });
