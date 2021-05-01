

const persona = {

  nombre: "Cesar",
  apellido: "Briones",
  edad: 18,
  direccion: {
    lugar: "Mexico",
    ciudad: "Tepatitlan",
    edificio: {
      telefono: "3781483044",
      altura: "25 pisos",
      nombre: "Hotel rivera",
      capacidad: "125 personas"
    }
  }

};




const edificio = persona.direccion.edificio;

edificio.nopiso = " 6to piso";



console.log ( persona );












