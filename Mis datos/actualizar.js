function actualizarDatos(event) {
    event.preventDefault(); // previene el comportamiento por defecto de enviar el formulario
    // Obtiene los valores actualizados del formulario
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var domicilio = document.getElementById("domicilio").value;

    
    // Actualiza los valores de los elementos de la sección "Datos personales"
    document.querySelector("section p:nth-of-type(4)").innerHTML = "<strong>Correo electrónico:</strong> " + correo;
    document.querySelector("section p:nth-of-type(5)").innerHTML = "<strong>Teléfono:</strong> " + telefono;
    document.querySelector("section p:nth-of-type(6)").innerHTML = "<strong>Domicilio:</strong> " + domicilio;

    
    // Muestra un mensaje de confirmación con SweetAlert2 que agregamos al html con el script
    Swal.fire({
        icon: 'success',
        title: '¡Datos actualizados!',
        text: 'Los datos se actualizaron correctamente.',
        timer: 2000,
        showConfirmButton: false,
    });
}