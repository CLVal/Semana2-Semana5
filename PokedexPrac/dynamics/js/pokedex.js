window.addEventListener("load", ()=>{
  const btnAgregar = document.getElementById("btn-agregar");
  const divAgregar = document.getElementById("contenedor-agregar");
  const btnEnviar = document.getElementById("btn-enviar");
  const buscador = document.getElementById("buscador");
  const divDatos = document.getElementById("contenedor-mostrar");
  const divResultados = document.getElementById("contenedor-resultados");
  const formNuevo = document.getElementById("form-nuevo");
  const sinResult = document.getElementById("sinResult");
  const divActualizar = document.getElementById("contenedor-actualizar");
  const formViejo = document.getElementById("form-viejo");
  const btnEnviarAct = document.getElementById("btn-actualizar");

  btnAgregar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "block";
    divDatos.style.display = "none";
  });

  btnEnviar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "none";
    evento.preventDefault();
    let datosForm = new FormData(formNuevo);
    fetch("dynamics/php/crear_pokemon.php", {
      method:"POST",
      body: datosForm,
    }).then((response)=>{
      return response.json();
    }).then((datosJSON)=>{
      if(datosJSON.ok == true){
        alert("Todo bien");
      }else{
        alert(datosJSON.texto);
      }
    })
  });

  fetch("dynamics/php/tipos.php")
    .then((response)=>{
      return response.json();
    })
    .then((datosJSON)=>{
      console.log(datosJSON);
      let selectTipos = document.getElementById("select-tipos");
      for(tipo of datosJSON){
        selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
      }
    });

  buscador.addEventListener("keyup", (evento) => {
    let termino = buscador.value;
    divResultados.innerHTML="";
    
    if(termino.length >= 3){
    fetch("./dynamics/php/pokemon.php?q="+termino)
      .then((response)=>{
        return response.json();
      })
      .then((datosJSON) =>{//mostrar datos
        console.log(datosJSON);
        for(pokemon of datosJSON){
          let div = document.createElement("div");
          div.innerHTML = pokemon.pok_name;
          div.dataset.id = pokemon.pok_id;
          div.classList.add("coincidencia");
          divResultados.appendChild(div);
        }
      });
    } 
    
    if(termino.length > 3 && divResultados.innerHTML == '') {
      console.log("entras?")
      let div = document.createElement("div");
      div.innerHTML = "No se encontraron coincidencias";
      divResultados.appendChild(div);
    }
  });

  divResultados.addEventListener("click", (evento)=>{
    if(evento.target.classList.contains("coincidencia")){
      let id = evento.target.dataset.id;
      fetch("dynamics/php/pokemon.php?id="+id)
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          if(datosJSON.ok == true){
            divDatos.innerHTML="<div class='dato'><strong>Nombre</strong>"+datosJSON.datos.nombre +"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Altura</strong>"+datosJSON.datos.altura +"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Peso</strong>"+datosJSON.datos.peso +"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Tipo</strong>"+datosJSON.datos.tipo +"</div>";
            divDatos.innerHTML+="<button id='btn-eliminar' data-id='" + id + "'>Eliminar pokemon</button>";
            divDatos.innerHTML += "<button id='btn-actualizar' data-id='" + id + "'>Actualizar pokemon</button>";
            divDatos.style.display = "flex";
          }
        });
    }
  });

  divDatos.addEventListener("click", (evento)=>{
    if(evento.target.id == "btn-eliminar"){
      let datosForm = new FormData();
      datosForm.append("id", evento.target.dataset.id);
      fetch("dynamics/php/borrar_pokemon.php",{
        method:"POST",
        body: datosForm,
      }).then((response)=>{
        return response.json();
      }).then((datosJSON)=>{
        if(datosJSON.ok == true){
          divDatos.style.display = "none";
          alert("Se elimino el pokemon");
        }
        else
          alert("No se pudo eliminar");
      });
    }

    if(evento.target.id == "btn-actualizar"){
      divActualizar.style.display = "block";
    }  
    
  });

  btnEnviarAct.addEventListener("click", (evento)=>{
    evento.preventDefault();
    let datosForm1 = new FormData(formViejo);
    fetch("dynamics/php/actualizar_pokemon.php", {
      method:"POST",
      body: datosForm1,
    }).then((response)=>{
      return response.json();
    }).then((datosJSON)=>{
      if(datosJSON.ok == true){
        divDatos.style.display = "none";
        divActualizar.style.display = "none";
        alert("Todo bien");
      }else{
        alert(datosJSON.texto);
      }
    })
  });

  fetch("dynamics/php/tipos.php")
    .then((response)=>{
      return response.json();
    })
    .then((datosJSON)=>{
      console.log(datosJSON);
      let selectTipos1 = document.getElementById("select-tipos1");
      for(tipo of datosJSON){
        selectTipos1.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
      }
    });

});