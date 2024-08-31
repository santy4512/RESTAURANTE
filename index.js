// Función para registrar datos en localStorage
function registrar() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();

        const numeroIngresado = document.getElementById('numero1').value.trim();
        const gradoIngresado = document.getElementById("grado1").value;

        const numerosValidos = ["1023774175", "1097505477","1023528861","1035582250","1025897866","1036653498","1186463936","1015077254","1020309190","1013349443","1011404834","1025661066","1039225407","1023639506","1020313332","1192467893","1021932547","1012921058",
            "1015192901", "1013464224","1054876231", "1131224941", "1023531583", "1040575284", "1020313404", "1195213771", "1020313762", "1073702587", "1015192701", "1036649993", "1036456674", "1020313207", "1198464853", "1128456356","1032021383", "1020308106", "N37594437105", "1020311782", "1155963146", "1033191242", "1036455212", "1023642899", "1020310884", "1128458316", "1023530520", "1018249606", "1128456835", "1042153411", "1128458138", "1018253330", "5239307", "5239558", "1198464000", "1011403837", "1033190985", "1025664596", "1013464263", "1020312256", "1128458314", "1018252204", "1033190443", "1036650062", "1013349047", "7542767", "1037750852", "1031815366", "1025766521", "1011402016", "1025660453", "1054555515", "1015189354", "1018248685", "1018250548", "1015191590", "1025660081", "1027808131", "1020119047", "1020307696", "1025658081", "4891187", "1018245046", "1138674880", "1023528908", "1020309710","1198463047", "1033261813", "1017933712", "1044151349", "1044151388", "1023637687",]; //almuerzo (falta mañana)
            
        const gradosValidos = ["10-1", "10-2", "10-3", "10-4", "11-1", "11-2", "11-3", "11-4", "9-1", "9-2", "9-3"];

        const numerosValidos2 = ["1035980019", "1155713438", "1128458695", "1020313831", "1023641798", "1027811428", "1013464653", "1195213782", "1128459195", "1020312478", "1198464608", "1036640837", "1018254098", "1035979596", "1128459414", "1155713634", "6548348", "1020313940", "1034922150", "1015193114","1062972568", "1140925325", "1025768636", "1020313795", "1027811962", "1113310333", "1017937203", "1128457165", "1037674489", "1033194800", "1195213850", "1103750200", "1131225372", "1128459981", "1036310448", "1042153333", "1025767977", "1017937230", "1017280433", "1044646967", "1020312089", "1195213915", "1128460071", "1128459768", "1128458318", "1027812177", "1198464878", "1040575389", "1195213735", "1027811184", "1040575463", "1034998715", "1032023295", "1039886746", "1027811201", "1037750921", "1038872462", "1011405891", "1169890", "1017935085", "1025659692", "1114005855", "1128458065", "1018252769", "1025660121", "1020311629", "1128457094", "1013463799", "1040747521", "1128458276", "1025662592", "1045433542", "1033190366", "1038265269", "1192464408", "1020313289", "1018347292", "1039461069", "1040880529", "1036455231", "1128457870", "1040880380", "1036455192", "1036648938", "1038411939", "1015191416", "1025660743", "1032100142", "1020309160", "1016722420", "1023530152", "1018249962", "1192465150", "1027809777", "1038871378", "1035977122", "1041535070", "1034996914", "1198213003", "1195213411", "1025661652", "1013463170", "1017934456", "1015191794", "1038264643", "1099262989", "1131224213", "1021928167", "1011403078", "1020308740", "1025893149", "1013347732", "1046668246", "1023529883", "1036454641", "1036454642", "1038265393", "1035978868", "1023640466", "1034996881", "1018374796", "1023530002", "1032019316", "1039911606", "1192465661", "1020307254", "5963205"]; //Refrigerio
        const gradosValidos2 = ["6-1", "6-2", "6-3", "6-4", "7-1", "7-2", "7-3", "8-1", "8-2", "8-3","10-1", "10-2", "10-3", "10-4", "11-1", "11-2", "11-3", "11-4", "9-1", "9-2", "9-3"];

        const resultado = document.getElementById('resultado');

        if (numerosValidos.includes(numeroIngresado) && gradosValidos.includes(gradoIngresado)) {
            resultado.textContent = 'El estudiante es titular de restaurante, puede pasar.';
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


        } else if (numerosValidos2.includes(numeroIngresado) && gradosValidos2.includes(gradoIngresado)){
            resultado.textContent = 'El estudiante es titular de refrigerio, puede pasar.';
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
        }
        else {
            resultado.textContent = 'El estudiante no es ni de almuerzo ni de refrigerio, no puede pasar.';
            resultado.style.color = 'red';
        }

               });
              }


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

