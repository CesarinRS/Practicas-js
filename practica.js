function Persona(nombre, apellido, estatura, colorPelo, padres) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = 17;
  this.estatura = estatura;
  this.colorPelo = colorPelo;
  this.padres = padres;

  this.imprimirPersona = function () {
    return (
      this.nombre +
      " " +
      this.apellido +
      "(" +
      this.edad +
      ")" +
      " estatura: " +
      this.estatura +
      "," +
      " Color de pelo " +
      this.colorPelo +
      "," +
      " hijo de " +
      this.padres
    );
  };
}

const cesar = new Persona(
  "Cesar",
  "Briones",
  "1.75",
  "Castaño",
  "Julio Cesar y Claudia Huerta"
);

console.log(cesar.imprimirPersona());
