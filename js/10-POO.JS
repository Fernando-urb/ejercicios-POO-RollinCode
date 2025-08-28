// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.

// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.


class Aeropuerto {
    constructor(nombreAeropuerto , listaDeAviones) {
        this._nombreAeropuerto = nombreAeropuerto;
        this._listaDeAviones = listaDeAviones;

        
    }
    agregarAvion(avion){
        this._listaDeAviones.push(avion);
        console.log(`Se agrego el avion ${avion} a la lista de aviones`);
        



    }
    buscarAvion(nombreAvion){
        const avionBuscado = this._listaDeAviones.find(avion => avion._nombre === nombreAvion);
        if (avionBuscado) {
            console.log(`El avion ${nombreAvion} se encuentra en la lista de aviones`);
        } else {
            console.log(`El avion ${nombreAvion} no se encuentra en la lista de aviones`);
        }
        
    }

}
class Aviones {
    constructor(nombre, capacidad, destino, listaDePasajeros){
        this._nombre = nombre;
        this._capacidad = capacidad;
        this._destino = destino;
        this._listaDePasajeros = listaDePasajeros;
        
    }
    abordarAvion(pasajero){
        if(this._listaDePasajeros.length < this._capacidad){
            this._listaDePasajeros.push(pasajero);
            console.log(`Se abordo el pasajero ${pasajero} al avion ${this._nombre}`);
            
         
        }else{
               console.log(`El avion ${this._nombre} se encuentra lleno`);
        }


    }
}
const AeropuertoInternacional = new Aeropuerto(
  "Aeropuerto Internacional",
  [
    new Aviones("Avion 1", 100, "Londres", ["Pasajero 1", "Pasajero 2", "Pasajero 3"]),
    new Aviones("Avion 2", 200, "Paris", ["Pasajero 4", "Pasajero 5", "Pasajero 6"]),
    new Aviones("Avion 3", 300, "New York", ["Pasajero 7", "Pasajero 8", "Pasajero 9"]),
  ]
);

const nuevoAvion = new Aviones("Avion 4", 400, "Tokio", []);
AeropuertoInternacional.agregarAvion(nuevoAvion);

AeropuertoInternacional.buscarAvion("Avion 2");

AeropuertoInternacional._listaDeAviones[0].abordarAvion("Pasajero 10");
