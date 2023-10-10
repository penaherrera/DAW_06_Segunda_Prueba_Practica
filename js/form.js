const departamentoSelect = document.getElementById('departamento');
const municipioSelect = document.getElementById('municipio');

const departamentosYMunicipios = {
    "Ahuachapán": ["Ahuachapán", "Apaneca", "Atiquizaya", "Concepción de Ataco", "El Refugio"],
    "Santa Ana": ["Santa Ana", "Metapán", "Chalchuapa", "Coatepeque", "Santa Rosa Guachipilín"],
    "Sonsonate": ["Sonsonate", "Izalco", "Nahuizalco", "Sonzacate", "Juayúa"],
    "La Libertad": ["Santa Tecla", "La Libertad", "Antiguo Cuscatlán", "Nuevo Cuscatlán", "Zaragoza"],
    "San Salvador": ["San Salvador", "Soyapango", "Mejicanos", "Antiguo Cuscatlán", "Delgado"],
    "Cuscatlán": ["Cojutepeque", "Santa Cruz Michapa", "Suchitoto", "San Bartolomé Perulapía", "Oratorio de Concepción"],
    "La Paz": ["Zacatecoluca", "San Juan Nonualco", "Santiago Nonualco", "San Rafael Obrajuelo", "Tapalhuaca"],
    "San Vicente": ["San Vicente", "Apastepeque", "Guadalupe", "San Cayetano Istepeque", "Verapaz"],
    "Usulután": ["Usulután", "San Miguel", "Santa Elena", "Jiquilisco", "Ozatlán"],
    "San Miguel": ["San Miguel", "Usulután", "San Rafael Oriente", "San Luis de la Reina", "Carolina"],
    "Morazán": ["San Francisco Gotera", "San Simón", "Sociedad", "Lolotiquillo", "Chilanga"],
    "La Unión": ["La Unión", "Santa Rosa de Lima", "Conchagua", "Pasaquina", "Yayantique"],
    "Chalatenango": ["Chalatenango", "Nueva Concepción", "Santa Rita", "San Antonio de la Cruz", "La Palma"],
    "Cabañas": ["Sensuntepeque", "Ilobasco", "Victoria", "San Isidro", "Guacotecti"]
};


function llenarDepartamentos() {
    for (const departamento in departamentosYMunicipios) {
        const option = document.createElement('option');
        option.value = departamento;
        option.textContent = departamento;
        departamentoSelect.appendChild(option);
    }
}

function llenarMunicipios() {
    const selectedDepartamento = departamentoSelect.value;
    const municipios = departamentosYMunicipios[selectedDepartamento] || [];
    municipioSelect.innerHTML = '';

    for (const municipio of municipios) {
        const option = document.createElement('option');
        option.value = municipio;
        option.textContent = municipio;
        municipioSelect.appendChild(option);
    }
}

departamentoSelect.addEventListener('change', llenarMunicipios);
llenarDepartamentos();
llenarMunicipios();

function guardarPaciente() {
    let nombre = document.getElementById('nombre').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let departamento = departamentoSelect.value;
    let municipio = municipioSelect.value;
    let tipoDocumento = document.getElementById('tipoDocumento').value;
    let numeroDocumento = document.getElementById('numeroDocumento').value;
    let telefono = document.getElementById('telefono').value;
    let motivoConsulta = document.getElementById('motivoConsulta').value;

    if (!departamento || !municipio) {
        alert('Por favor, seleccione un departamento y un municipio.');
        return;
    }

    let paciente = {
        nombre: nombre,
        fechaNacimiento: fechaNacimiento,
        direccion: `${departamento}, ${municipio}`,
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
    departamentoSelect.value = '';
    llenarMunicipios();
    document.getElementById('tipoDocumento').value = '';
    document.getElementById('numeroDocumento').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('motivoConsulta').value = '';

    alert('La información del paciente ha sido registrada correctamente.');
}

document.getElementById('guardar').addEventListener('click', guardarPaciente);
