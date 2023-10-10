function guardarPaciente() {
    let nombre = document.getElementById('nombre').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let direccion = document.getElementById('direccion').value;
    let tipoDocumento = document.getElementById('tipoDocumento').value;
    let numeroDocumento = document.getElementById('numeroDocumento').value;
    let telefono = document.getElementById('telefono').value;
    let motivoConsulta = document.getElementById('motivoConsulta').value;

    let paciente = {
        nombre: nombre,
        fechaNacimiento: fechaNacimiento,
        direccion: direccion,
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        telefono: telefono,
        motivoConsulta: motivoConsulta
    };

    let pacientesGuardados = JSON.parse(localStorage.getItem('pacientes')) || [];

    pacientesGuardados.push(paciente);

    localStorage.setItem('pacientes', JSON.stringify(pacientesGuardados));

    document.getElementById('nombre').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('tipoDocumento').value = '';
    document.getElementById('numeroDocumento').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('motivoConsulta').value = '';

    alert('La información del paciente ha sido registrada correctamente.');

    console.log(pacientesGuardados);
}

document.getElementById('guardar').addEventListener('click', guardarPaciente);
