// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  #codigo;
  #nombre;
  #precio;
  constructor(nombre, precio) {
    this.#codigo = crypto.randomUUID();
    this.#nombre = nombre;
    this.#precio = precio;
  }
  get pedircodigo() {
    return this.#codigo;
  }
  get pedirNombre() {
    return this.#nombre;
  }
  get pedirPrecio() {
    return this.#precio;
  }
  set nuevoNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set nuevoPrecio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }
  imprimirDatos() {
    console.log(` el codigo es ${this.#codigo}`);
    console.log(` el nombre es ${this.#nombre}`);
    console.log(` el precio es ${this.#precio}`);
  }
}

const dobok = new Producto("Dobok talle 6", 15300);
const cinturon = new Producto("Cinturon Negro", 4500);
const zapatilla  = new Producto("Zapatillas talle 40", 63000);

// Guardar en array
const productos = [];
productos.push(dobok);
productos.push(cinturon);
productos.push(zapatilla);


// Mostrar datos
productos.forEach((producto) => producto.imprimirDatos());
