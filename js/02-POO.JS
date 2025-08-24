// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// Rectángulos
class Cuenta {
    constructor(titular , saldo) {
        this._titular = "Alex";
        this._saldo = 0;
        
    }
    Ingresar(monto){
        this._saldo += monto;
        console.log(`El titular de la cuenta es ${this._titular} ingreso ${monto} y tiene un saldo de ${this._saldo}`);
        
    }
    Extraer(monto){
        this._saldo -= monto;
        console.log(`El titular de la cuenta es ${this._titular} extrajo ${monto} y tiene un saldo de ${this._saldo}`);
        
    }
    Informar(){
        console.log(`El titular de la cuenta es ${this._titular}  tiene un saldo total de ${this._saldo}`);
    }

}

const cuenta = new Cuenta();
cuenta.Ingresar(100);
cuenta.Extraer(50);
cuenta.Informar();