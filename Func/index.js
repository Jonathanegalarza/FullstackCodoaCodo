/*const agregarAlumnos = () => {
    var participantes = []
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    participantes.push({ nombre, email });
    console.log(participantes);
    grupoForm.reset();

    participantes.map(item=>{
        //Accedemos a su contenido
          participantes +=`<tr>
          <td>${item.nombre}</td>
          <td>${item.email}</td>
          </tr>`
        })
        //Dibujamos la informacion
        document.getElementById("alumnos").innerHTML = participantes
}*/

let alumnos = [];

    
function agregarAlumnos() {
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;

    
    var alumno = { nombre, apellido, email };
    alumnos.push(alumno);

    
    document.getElementById("grupoForm").reset();

    
    mostrarAlumnos();
}


function mostrarAlumnos() {
    var nombreM = document.getElementById("nombreM");
    nombreM.innerHTML = '';

    alumnos.forEach(function(alumno) {
        var nuevoAlumno = document.createElement("div");
        nuevoAlumno.innerHTML = "<p>" + alumno.nombre + " " + alumno.apellido + "<br>" + alumno.email + "</p>";
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
            alumnoDiv.innerHTML = "<p>" + alumno.nombre + " " + alumno.apellido + "<br>" + alumno.email + "</p>";
            grupoDiv.appendChild(alumnoDiv);
        });

        main.appendChild(grupoDiv);
    });
}
