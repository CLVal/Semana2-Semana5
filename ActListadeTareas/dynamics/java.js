const agregar = document.getElementById("agregar"); //boton
const tarea = document.getElementById("tarea"); //input
const materias = document.getElementById("materias"); //opcion
const lista = document.getElementById("lista");  //lista
const nuevamat = document.getElementById("nuevamat");
const otra = document.getElementById("otra");
const contenido = document.getElementById("contenido");
const input = document.getElementById("input");
const realizadas = document.getElementById("realizadas");
const cuenta = document.getElementById("numtareas");
const eliminar = document.getElementsByClassName("eliminar");

var numpendientes = 0;
var numhechas = 0;

agregar.addEventListener("click", (evento) => {
    if (materias.value == 'Otra' && contenido.value ==''){
        nuevamat.style.display = "block";
    } 
    if(materias.value != 'Otra'){
        lista.innerHTML +=  '<div><button class="terminada" >Marcar como terminada </button> <button class="eliminar" >Eliminar</button>  ' + materias.value+ ': ' + tarea.value +'<div>'; 
        numpendientes++;
        cuenta.innerHTML = numpendientes;
        console.log("llevas tareas"+numpendientes);
    }
    if (contenido.value != '' && materias.value == 'Otra'){ //&& materias.value=='Otra'
        materias.innerHTML += '<option>' + contenido.value +' </option>';
        lista.innerHTML +=  '<div><button class="terminada" >Marcar como terminada </button> <button class="eliminar" >Eliminar</button>  ' + contenido.value+ ': ' + tarea.value+'<div>'; 
        contenido.value= '';
        nuevamat.style.display = "none";
        numpendientes++;
        cuenta.innerHTML = numpendientes;
        console.log("llevas tareas"+numpendientes);
    }
});   



lista.addEventListener("click", (evento) => {
    if (evento.target.className === 'eliminar'){
        evento.target.parentElement.outerHTML = '';
        numpendientes--;
        console.log("llevas tareas" +numpendientes);
        cuenta.innerHTML = numpendientes;
        //evento.target.lista (outerHTML);
    }

    if (evento.target.className === 'terminada'){
        evento.target.parentElement.style.background = "#0f3f06";
        numhechas++;
        console.log("haz hecho" + numhechas);
        realizadas.innerHTML = numhechas;

        //evento.target.lista (outerHTML);
    }
        
});





   