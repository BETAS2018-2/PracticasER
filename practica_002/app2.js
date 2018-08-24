let alumnos = [
  {
    id : 1,
    nombre : "Miguel",
    cal : 10,
    materias : 6
  },
  {
    id : 2,
    nombre : "Antonio",
    cal : 3,
    materias : 4
  },
  {
    id : 3,
    nombre : "Juan",
    cal : 3,
    materias : 7    
  }
];

let obtenerNombre = (materias, callback) => {
  let nombre = alumnos.find((noMaterias) => noMaterias.materias === materias);

  if(!nombre){
    callback(`Error`, null)
  }else{
    callback(null, nombre.nombre)
  }
}

obtenerNombre(7, (err, materias) => {
    if(err){
      return console.log(err);
    }
      console.log(materias);
})
