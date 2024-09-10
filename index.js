document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario1")?.addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let documento = document.getElementById("documento").value.trim();
        let tipo = document.getElementById("tipo").value;
        let grado = document.getElementById("grado").value;

        console.log("Nombre:", nombre);
        console.log("Documento:", documento);
        console.log("Tipo:", tipo);
        console.log("Grado:", grado);

        if (!nombre || !documento || !tipo || !grado) {  // Verificar que todos los campos no estén vacíos
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Crear objeto con los datos
        let usuario = {
            nombre: nombre,
            documento: documento,
            tipo: tipo,
            grado: grado,  // Agregar grado al objeto
            fecha: new Date().toLocaleDateString()
        };

        // Guardar en localStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Usuario registrado exitosamente.");
        document.getElementById("formulario1").reset();
    });

    // Verificación de usuarios para almuerzo o refrigerio
    document.getElementById("formulario")?.addEventListener("submit", function(event) {
        event.preventDefault();

        let documentoIngresado = document.getElementById("numero1").value.trim();
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let usuarioEncontrado = usuarios.find(user => user.documento === documentoIngresado);

        if (usuarioEncontrado) {
            let resultado = `Nombre: ${usuarioEncontrado.nombre}<br>Grado: ${usuarioEncontrado.grado}<br>Tipo: ${usuarioEncontrado.tipo === "1" ? "Almuerzo" : "Refrigerio"}`;
            document.getElementById("resultado").innerHTML = resultado;

            // Enlistar en la página correspondiente
            if (usuarioEncontrado.tipo === "1") {
                agregarALista("almuerzo", usuarioEncontrado);
            } else {
                agregarALista("refrigerio", usuarioEncontrado);
            }
        } else {
            document.getElementById("resultado").innerHTML = "Usuario no encontrado.";
        }
    });

    // Mostrar datos en la página de almuerzo
    if (window.location.pathname.includes("listadeingresados.html")) {
        let almuerzoUsuarios = JSON.parse(localStorage.getItem("almuerzo")) || [];
        mostrarListaUsuarios(almuerzoUsuarios, "ti", "grado", "fecha");
    }

    // Mostrar datos en la página de refrigerio
    if (window.location.pathname.includes("listadeingresados2.html")) {
        let refrigerioUsuarios = JSON.parse(localStorage.getItem("refrigerio")) || [];
        mostrarListaUsuarios(refrigerioUsuarios, "ti2", "grado2", "fecha2");
    }

    // Limpiar listas
    document.getElementById("limpiarlista")?.addEventListener("click", function() {
        localStorage.removeItem("almuerzo");
        alert("Listas limpiadas.");
        location.reload();
    });
    document.getElementById("limpiarlista1")?.addEventListener("click", function() {
        localStorage.removeItem("refrigerio");
        alert("Listas limpiadas.");
        location.reload();
    });
});

// Función para agregar a la lista correspondiente
function agregarALista(tipo, usuario) {
    let lista = JSON.parse(localStorage.getItem(tipo)) || [];
    lista.push(usuario);
    localStorage.setItem(tipo, JSON.stringify(lista));
}

// Función para mostrar usuarios en la lista
function mostrarListaUsuarios(usuarios, tiId, gradoId, fechaId) {
    let tiElement = document.getElementById(tiId);
    let gradoElement = document.getElementById(gradoId);
    let fechaElement = document.getElementById(fechaId);

    tiElement.innerHTML = ""; // Limpiar contenido previo
    gradoElement.innerHTML = "";
    fechaElement.innerHTML = "";

    usuarios.forEach(usuario => {
        tiElement.innerHTML += `<p>${usuario.documento}</p>`;
        gradoElement.innerHTML += `<p>${usuario.grado || 'N/A'}</p>`;
        fechaElement.innerHTML += `<p>${usuario.fecha || 'Fecha no disponible'}</p>`;
    });
}
