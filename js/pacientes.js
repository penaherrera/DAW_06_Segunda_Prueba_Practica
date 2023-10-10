class Paciente {
    constructor(nombre, fechaNacimiento, direccion, tipoDocumento, numeroDocumento, telefono, motivoConsulta) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.telefono = telefono;
        this.motivoConsulta = motivoConsulta;
    }
}

// Función para mostrar la lista de pacientes almacenados en localStorage
function mostrarPacientes() {
    const listaPacientes = document.getElementById('listaPacientes');
    listaPacientes.innerHTML = '';

    const pacientesGuardados = JSON.parse(localStorage.getItem('pacientes')) || [];

    pacientesGuardados.forEach((paciente, index) => {
        const elementoTarjeta = document.createElement('li');
        elementoTarjeta.className = 'paciente-card'; 
        elementoTarjeta.innerHTML = `
            <strong>Nombre:</strong> ${paciente.nombre}<br>
            <strong>Fecha de nacimiento:</strong> ${paciente.fechaNacimiento}<br>
            <strong>Dirección:</strong> ${paciente.direccion}<br>
            <strong>Tipo de documento:</strong> ${paciente.tipoDocumento}<br>
            <strong>Número de documento:</strong> ${paciente.numeroDocumento}<br>
            <strong>Número de teléfono:</strong> ${paciente.telefono}<br>
            <strong>Motivo de consulta:</strong> ${paciente.motivoConsulta}<br>
            <button class="botonEliminar" data-indice="${index}">Eliminar</button>
        `;
        listaPacientes.appendChild(elementoTarjeta);
    });

    // Agregar event listener para los botones de eliminación
    const botonesEliminar = document.querySelectorAll('.botonEliminar');
    botonesEliminar.forEach((boton) => {
        boton.addEventListener('click', eliminarPaciente);
    });
}

// Función para eliminar un paciente específico
function eliminarPaciente(evento) {
    const indice = evento.target.getAttribute('data-indice');
    let pacientesGuardados = JSON.parse(localStorage.getItem('pacientes')) || [];

    if (indice !== null && indice !== undefined) {
        pacientesGuardados.splice(indice, 1);
        localStorage.setItem('pacientes', JSON.stringify(pacientesGuardados));
        mostrarPacientes();
    }
}

// Event listener para el botón "Borrar Todos los Pacientes"
document.getElementById('borrarPacientes').addEventListener('click', () => {
    localStorage.removeItem('pacientes');
    mostrarPacientes();
});

// Mostrar la lista de pacientes al cargar la página
mostrarPacientes();

