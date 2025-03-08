function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFont("Arial");
    doc.setFontSize(12);

    const nombreDocente = document.getElementById("nombreDocente").value;
    const formacion = document.getElementById("formacion").value;
    const horario = document.getElementById("horario").value;
    const grupoDocente = document.getElementById("grupoDocente").value;
    
    const nombreEstudiante = document.getElementById("nombreEstudiante").value;
    const codigoEstudiante = document.getElementById("codigoEstudiante").value;
    const carrera = document.getElementById("carrera").value;
    const semilleroEstudiante = document.getElementById("semilleroEstudiante").value;
    
    const tituloActividad = document.getElementById("tituloActividad").value;
    const fechaHora = document.getElementById("fechaHora").value;
    const limite = document.getElementById("limite").value;
    const resumen = document.getElementById("resumen").value;

    if (!nombreDocente || !formacion || !horario || !nombreEstudiante || !codigoEstudiante || !carrera || !tituloActividad || !fechaHora || !limite || !resumen) {
        document.getElementById("errorMensaje").innerText = "Error: Todos los campos deben estar llenos antes de generar el PDF.";
        return;
    }

    document.getElementById("errorMensaje").innerText = "";
    doc.text("Información Registrada", 10, 10);
    doc.text("Docente Investigador:", 10, 20);
    doc.text(`Nombre: ${nombreDocente}`, 20, 30);
    doc.text(`Formación Académica: ${formacion}`, 20, 40);
    doc.text(`Horario de Atención: ${horario}`, 20, 50);
    doc.text(`Grupo: ${grupoDocente}`, 20, 60);
    
    doc.text("Estudiante Vinculado:", 10, 80);
    doc.text(`Nombre: ${nombreEstudiante}`, 20, 90);
    doc.text(`Código: ${codigoEstudiante}`, 20, 100);
    doc.text(`Carrera: ${carrera}`, 20, 110);
    doc.text(`Semillero: ${semilleroEstudiante}`, 20, 120);
    
    doc.text("Actividad Registrada:", 10, 140);
    doc.text(`Título: ${tituloActividad}`, 20, 150);
    doc.text(`Fecha y Hora: ${fechaHora}`, 20, 160);
    doc.text(`Límite de Asistentes: ${limite}`, 20, 170);
    doc.text("Resumen:", 10, 190);
    doc.text(resumen, 20, 200, { maxWidth: 170 });
    
    doc.save("informacion.pdf");
}

function limpiarFormulario(id) {
    document.getElementById(id).reset();
}