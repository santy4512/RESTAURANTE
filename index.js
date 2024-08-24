// Función para registrar datos en localStorage
function registrar() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();

        const numeroIngresado = document.getElementById('numero1').value.trim();
        const gradoIngresado = document.getElementById("grado1").value;

        const numerosValidos = ["1195213271", "1128446771", "1195215144"];
        const gradosValidos = ["10-1", "10-2", "10-3", "10-4", "11-1", "11-2", "11-3", "11-4", "9-1", "9-2", "9-3"];

        const resultado = document.getElementById('resultado');

        if (numerosValidos.includes(numeroIngresado) && gradosValidos.includes(gradoIngresado)) {
            resultado.textContent = 'El estudiante es titular, puede pasar.';
            resultado.style.color = 'green';
            alert("Datos registrados correctamente.");

            // Crear un objeto para el registro
            const registro = {
                numero: numeroIngresado,
                grado: gradoIngresado,
                fecha: new Date().toLocaleString()
            };

            // Recuperar los registros almacenados en localStorage
            let registros = JSON.parse(localStorage.getItem('registros')) || [];

            // Agregar el nuevo registro al array
            registros.push(registro);

            // Guardar el array actualizado en localStorage
            localStorage.setItem('registros', JSON.stringify(registros));

        } else {
            resultado.textContent = 'El estudiante no es de almuerzo, no puede pasar.';
            resultado.style.color = 'red';
        }
    });
}

// Función para mostrar registros en la segunda página
function mostrarRegistros() {
    const ti = document.getElementById('ti');
    const grado = document.getElementById('grado');
    const fecha = document.getElementById('fecha');

    // Recuperar los registros almacenados en localStorage
    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    // Limpiar el contenido actual
    ti.innerHTML = '';
    grado.innerHTML = '';
    fecha.innerHTML = '';

    // Mostrar los registros
    registros.forEach(registro => {
        const divNumero = document.createElement('div');
        divNumero.textContent = registro.numero;

        const divGrado = document.createElement('div');
        divGrado.textContent = registro.grado;

        const divFecha = document.createElement('div');
        divFecha.textContent = registro.fecha;

        ti.appendChild(divNumero);
        grado.appendChild(divGrado);
        fecha.appendChild(divFecha);
    });
}

function limpiarRegistros() {
    localStorage.removeItem('registros');
    mostrarRegistros(); 
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('formulario')) {
        registrar();
    } else if (document.getElementById('ti')) {
        mostrarRegistros();

        document.getElementById('limpiarlista').addEventListener('click', limpiarRegistros);
    }
});

