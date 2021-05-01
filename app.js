
function obtenerAleatorio(){

  return Math.random();

}


function obtenerNombre(){

  return "Cesar";
}

function esMayor05(){

  if( obtenerAleatorio() > 0.5  ){

    return true;

  }else{

    return false;


  }
}

if( esMayor05() ){

  console.log("Es mayor a 0.5");
}else{
  console.log("Es menor a 0.5");

}



function crearPersona( nombre, apellido ){

  return {
    nombre : nombre,
    apellido: apellido
  }
}


const persona = crearPersona("Cesar","Briones");


function creaFuncion(){

  return function( nombre ){
    console.log("Me creo " + nombre );
  }
}

const nuevaFuncion = creaFuncion();
nuevaFuncion( persona.nombre );






