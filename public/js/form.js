

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementsByClassName('comentarios-form')[0];
  // Cargar datos guardados si existen
//   const savedData = localStorage.getItem('newsletterResponse');
//   if (savedData) {
//     mostrarModal('Suscripción previa exitosa', JSON.parse(savedData));
//   }
    form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validar datos aquí (ejemplo simple)
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('data::::::::::', data);
    // if (!data.email || !data.nombre) {
    //   mostrarModal('Error de validación', { error: 'Todos los campos son obligatorios.' });
    //   return;
    // }

    // try {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   });

    //   const result = await response.json();

    //   if (response.ok) {
    //     mostrarModal('Suscripción exitosa', result);
    //     localStorage.setItem('newsletterResponse', JSON.stringify(result));
    //   } else {
    //     mostrarModal('Error en la suscripción', result);
    //   }
    // } catch (error) {
    //   mostrarModal('Error de red', { error: error.message });
    // }
  });
});