
const tareas = [
  { id: 1, description: "Compras del supermercado", estado: false },
  { id: 2, description: "Cortar el cesped", estado: false },
  { id: 3, description: "lavar el carro", estado: false },
];

const listaTareas = document.querySelector(".listaTareas");
const renderTareas = () => {
  let html = "";
  let html2 = "";
  for (const tarea of tareas) {
    html2 = tarea.estado ? 
    `<input class="checkbox" type="checkbox" onclick="cambiar(${tarea.id})" checked="true">`
    : `<input class="checkbox" type="checkbox" onclick="cambiar(${tarea.id})" >`;
    html += `<tr>
        <td>${tarea.id}</td>
        <td>${tarea.description}</td>
        <td>${html2}<button onclick="borrar(${tarea.id})">x</button></td>
      </tr>`;
  }
  listaTareas.innerHTML = html;
  let span = document.querySelector("#totalTarea");
  let contadorTareas = tareas.length;
  span.innerHTML = contadorTareas;

  let filtroTareas = tareas.filter((tarea) => tarea.estado == true);
  let span2 = document.querySelector("#tareaCompletada");
  span2.innerHTML = filtroTareas.length;
};
renderTareas();

const agregarTarea = document.querySelector("#agregarTarea");
const nuevaTarea = document.querySelector("#nuevaTarea");

agregarTarea.addEventListener("click", () => {
  console.log("validación btnaddTarea");

  if (nuevaTarea.value === "") {
    console.log("entro validación");
    alert("Debe ingresar una tarea");
    return;
  }

  if (tareas.length === 0 ){
    tareas.push({id:1, description: nuevaTarea.value, estado: false});
  }
  else { 
    let asignacionId = tareas[tareas.length-1].id+1;
    const addTareas = {
        id: asignacionId,
        description: nuevaTarea.value,
        estado: false,
      };
      tareas.push(addTareas);
     }

    nuevaTarea.value = "";
  renderTareas();
});

function borrar(id) {
  let idTareas = tareas.findIndex((tarea) => tarea.id === id);
  tareas.splice(idTareas, 1);
  renderTareas();
}

function cambiar(id) {
    let idTareas = tareas.findIndex((tarea) => tarea.id === id);
          if (tareas[idTareas].estado === true) {
        const objeto = {
            id: tareas[idTareas].id,
            description: tareas[idTareas].description,
            estado: false,
          };
          tareas.splice(idTareas, 1, objeto);
        
      
      }else {
        const objeto = {
            id: tareas[idTareas].id,
            description: tareas[idTareas].description,
            estado: true,
          };
          tareas.splice(idTareas, 1, objeto);
      }
      renderTareas();
}

//TAREAS A REALIZAR
//1.- ID (NUMEROS CORRELATIVOS)
//2.- DESCRIPCION
//3.- ESTADO PENDIENTE O REALIZADO
//INGRESAR UNA TAREA CON UN BOTON
//1.- ARREGLOS
//2.- TEMPLETE DE LO QUIERO MOSTRAR
//3.- BOTON FUNCION PARA INGRESAR TAREA (LISTO)
//4.- INPUT PARA INGRESAR TAREA
//5.- MOSTRAR TAREA INNER HTML


// CONTAR TAREAS INGRESADAS
//1.- CONTAR CUANTAS TAREAS TIENE EL ARREGLO  (LISTO)

// CONTAR TAREAS COMPLETADAS
//1.- FILTRAR ESTADO (LISTO)
//2.- CONTAR TAREAS FILTRADAS (LISTO)

// MOSTRAR TAREAS QUE EXISTEN
//1.- VER LA FORMA DE VER LO FILTRADO EN EL HTML

// BOTON PARA COMPLETAR TAREAS
//1.- BOTON QUE CAMBIE ESTADO  (listo)

//BOTON PARA ELIMINAR TAREAS
//1.- BOTON QUE ELIMINE UNA TAREA (listo)

