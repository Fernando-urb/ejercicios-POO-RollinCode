// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.

class Animal {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;

   
}
  emitirSonido() {
     if (
      typeof this._nombre !== "string" ||
      typeof this._edad !== "number" ||
      this._edad < 0 
    ) {
      console.log("los datos ingresados son invalidos");
    
  }
    
    } 
  }


class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
  emitirSonidoPerro() {
    this.emitirSonido();
    
    

    console.log(
      `mi perra se llama ${this._nombre}, tiene una edad de ${this._edad} y hace Guau!!`
    );
  }
}
class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
  emitirSonidoGato() {
        this.emitirSonido();
    console.log(
      `mi gato se llama ${this._nombre}, tiene una edad de ${this._edad} y hace Miau!!`
    );
  }
}

const miPerro = new Perro("canela", 12);
const miGato = new Gato("Cotex", 3);
miPerro.emitirSonidoPerro();
miGato.emitirSonidoGato();
