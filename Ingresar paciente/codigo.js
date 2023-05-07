function generarCodigo() {
    let ultimoCodigo = localStorage.getItem('ultimoCodigo') || 0;
    let nuevoCodigo = parseInt(ultimoCodigo) + 1;
    localStorage.setItem('ultimoCodigo', nuevoCodigo);
    document.getElementById("codigo").value = nuevoCodigo;
}

// Generar código del paciente automáticamente al cargar la página
window.onload = function () {
    generarCodigo();
};