/*document.addEventListener("DOMContentLoaded", function() {
    const grupoForm = document.getElementById('grupoForm');
    const crearGrupo = document.getElementById('crearGrupo');
    const grupoVisualizacion = document.getElementById('grupoVisualizacion');
    let participantes = [];

})

const agregarAlumnos = () => {
    var participantes = [];

    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.toLowerCase().trim();

    participantes.push({ nombre, apellido, email });
    window.localStorage.setItem('Nombre', nombre);
    window.localStorage.setItem('Apellido', apellido);
    window.localStorage.setItem('Email', email);
    
    grupoForm.reset();
    console.log(participantes);
    document.getElementById("nombreM").innerHTML = localStorage.getItem('Nombre')
    document.getElementById("apellidoM").innerHTML = localStorage.getItem('Apellido');
    document.getElementById("emailM").innerHTML = localStorage.getItem('Email')
}
*/

let alumnos = [];

    
function agregarAlumnos() {
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    
    if (nombre, apellido, email === ""){
        alert("No se puede agregar un alumno vacio");
    }else{
        var alumno = { nombre, apellido, email };
        alumnos.push(alumno);
        document.getElementById("grupoForm").reset();
        mostrarAlumnos();
    }
    
}


function mostrarAlumnos() {
    var nombreM = document.getElementById("nombreM");
    nombreM.innerHTML = '';

    alumnos.forEach(function(alumno) {
        var nuevoAlumno = document.createElement("div");
        nuevoAlumno.innerHTML = "<p>" + alumno.nombre + " " + alumno.apellido + "<br>" + alumno.email + "</p>" + "<br>";
        nombreM.appendChild(nuevoAlumno);
    });

    alert("Alumno agregado con exito")
}


function grupoVisualizacion() {
    var grupos = [];
    var alumnosCopia = alumnos.slice();

    
    while (alumnosCopia.length > 0) {
        grupos.push(alumnosCopia.splice(0, 4));
    }

    
    var main = document.getElementById("main");
    var existingGroups = document.querySelectorAll(".grupo");
    existingGroups.forEach(group => group.remove());

    grupos.forEach(function(grupo, index) {
        var grupoDiv = document.createElement("div");
        grupoDiv.className = "grupo";
        grupoDiv.innerHTML = "<h3>Grupo " + (index + 1) + "</h3>";

        grupo.forEach(function(alumno) {
            var alumnoDiv = document.createElement("div");
            alumnoDiv.innerHTML = "<p>" + alumno.nombre + " " + alumno.apellido + "<br>" + alumno.email + "</p>" + "<br>";
            grupoDiv.appendChild(alumnoDiv);
        });

        main.appendChild(grupoDiv);
    });
}
