let alumnos = [];

    
function agregarAlumnos() {
    var dni = document.getElementById("dni").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    
    if (dni, nombre, apellido, email === ""){
        alert("No se puede agregar un alumno vacio");
    }else{
        var alumno = { dni, nombre, apellido, email };
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
        nuevoAlumno.innerHTML = "<p>" + alumno.dni + "<br>" + alumno.nombre + " " + alumno.apellido + "<br>" + alumno.email + "</p>" + "<br>";
        nombreM.appendChild(nuevoAlumno);
    });
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
