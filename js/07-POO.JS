// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

class Contacto {
    constructor(nombre , telefono) {
        this._nombre = nombre;
        this._telefono = telefono;    
    }   

}



class Agenda {
    constructor() {
        this._contactos = [];
        
    }  
    aniadirContacto(contacto){
        if(this._contactos.length < 10){
            this._contactos.push(contacto);
            console.log(`Se agrego el contacto ${this._contactos} a la agenda`);
            

        }
        else{
            console.log(`lo sentimos la agenda ya esta completa`);
            
        }

    }
    existeContacto(contacto){
        if(this._contactos === contacto){
            console.log(`el contacto que quiere agregar ya existe`);
            
        }
        else{
            console.log(`el contacto que quiere agregar se puede agregar  a la agenda`);
            
        }
    }
    listarContactos(){
        this._contactos.forEach(contac  => {return contac});
        console.log(` esta es la lista de contactos ${this._contactos}`);
        
    }
    buscarContacto(nombre){
        if(this._contactos.includes(nombre)){
            console.log(`el contacto ${nombre} se encuentra en la agenda`);
            
        }
    }
    eliminarContacto(Contacto){


    }
    agendaLlena(){
        if(this._contactos.length > 10){
             console.log(`la agenda esta llena`);
           
            
        }
        else{
            console.log(`la agenda aun tiene espacio libre`);
            
        }
    }
    huecosLibres(){
        if(this._contactos.length < 10){
            console.log(`la agenda tiene ${10 - this._contactos} espacios libres`);
            
        }
    }
    

}

const agenda = new Agenda();

agenda.aniadirContacto("Fernando");
agenda.aniadirContacto("maria");


agenda.existeContacto("Fernando");


agenda.listarContactos();


agenda.buscarContacto("Fernando");


agenda.agendaLlena();


agenda.huecosLibres();

