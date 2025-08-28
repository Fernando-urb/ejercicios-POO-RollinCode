// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:

// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó

class Autos {
  constructor(color, marca, modelo, year) {
    this._color = color;
    this._marca = marca;
    this._modelo = modelo;
    this._year = year;
    this._estadoDelAuto = false;
  }
  encender() {
    if (this._estadoDelAuto) {
      console.log(`el auto ${this._modelo} ya esta encendido`);
    } else {
      this._estadoDelAuto === true;
      console.log(`el auto ${this._modelo} se encendido`);
    }
  }
  apagar() {
    if (!this._estadoDelAuto) {
      console.log(`el auto ${this._modelo} se apagó`);
    } else {
      this._estadoDelAuto === false;
      console.log(`el auto ${this._modelo} se apago`);
    }
  }
}

const miAuto = new Autos("plata", "chevrolet", "meriva", "2007");
console.log(miAuto);

miAuto.encender();
miAuto.apagar();
