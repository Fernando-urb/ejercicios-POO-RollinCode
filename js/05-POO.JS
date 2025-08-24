// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(
    nombre,
    age,
    DNI,
    genero,
    peso,
    altura,
    anioDeNacimiento,
    nacionalidad
  ) {
    this._nombre = nombre;
    this._age = age;
    this._DNI = DNI;
    this._genero = genero;
    this._peso = peso;
    this._altura = altura;
    this._anioDeNacimiento = anioDeNacimiento;
    this._nacionalidad = nacionalidad;
  }
  mostrarGeneracion() {
   

    if (this._anioDeNacimiento >= 1994 && this._anioDeNacimiento <= 2010) {
      console.log(
        `La persona ${this._nombre} pertenece a la generacion Z , Rasgo Caracteristico: 😋 irreverencia `
      );
    } else if (
      this._anioDeNacimiento >= 1981 &&
      this._anioDeNacimiento <= 1993
    ) {
      console.log(
        `La persona ${this._nombre} pertenece a la generacion Y , Rasgo Caracteristico: 😖 frustracion `
      );
    } else if (
      this._anioDeNacimiento >= 1969 &&
      this._anioDeNacimiento <= 1980
    ) {
      console.log(
        `La persona ${this._nombre} pertenece a la generacion  X , Rasgo Caracteristico: 😎 obsesion por el exito `
      );
    } else if (
      this._anioDeNacimiento >= 1949 &&
      this._anioDeNacimiento <= 1968
    ) {
      console.log(
        `La persona ${this._nombre} pertenece a la generacion Baby Boom , Rasgo Caracteristico: 🤑 Ambicion `
      );
    } else if (
      this._anioDeNacimiento >= 1930 &&
      this._anioDeNacimiento <= 1948
    ) {
      console.log(
        `La persona ${this._nombre} pertenece a la generacion Silent Generation , Rasgo Caracteristico: 😐 Austeridad `
      );
    } else {
      console.log(
        `La persona ${this._nombre} no pertenece a ninguna generacion`
      );
    }

    return "";
  }
  esMayorDeEdad() {
    
    if (this._age >= 18) {
      console.log(`${this._nombre} es mayor de edad`);
    } else {
      console.log(`${this._nombre} es menor de edad`);
    }
    return "";
  }
  mostrarDatos() {
    
    console.log(
      `La persona mostrada tiene por nombre: ${this._nombre}
Edad  : ${this._age}
DNI : ${this._DNI}
Genero : ${this._genero}
Peso  : ${this._peso}
Altura : ${this._altura}
Fecha de nacimiento año ${this._anioDeNacimiento}
Nacionalidad : ${this._nacionalidad}

                  `
    );
    return "";
  }
  generaDNI() {
 
    this._DNI = Math.floor(Math.random() * 100000000);
    console.log(`el numero de DNI es ${this._DNI}`);
    return "";
  }
}

const miPersona = new Persona("Fernando", 33,40087384, "M", 70, 170, 1992, "Argentino");
console.log(miPersona.mostrarGeneracion());
console.log(miPersona.esMayorDeEdad());
console.log(miPersona.mostrarDatos());
console.log(miPersona.generaDNI());
