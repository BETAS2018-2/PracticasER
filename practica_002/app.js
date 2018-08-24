let alumnos = [
  {
    id : 1,
    nombre: "Miguel",
    cal: 10
  },
  {
    id : 2,
    nombre : "Antonio",
    cal : 3
  },
  {
    id : 3,
    nombre : "Juan",
    cal : 3
  }
];

let getCalificacion = (id, callback) => {
  let calificacion = alumnos.find((calificaciones) => {
    return calificaciones.id === id;
  })

  if(!calificacion){
    callback(`La calificación con el id: ${id} no ha sido  encontrada`, null);
  } else{
    callback(null, calificacion);
  }
}

getCalificacion(3, (err, calificacion) => {
  if(err) return console.log(err);
  console.log(calificacion);
});