
// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
    constructor(nombre,edad,profesion) {
        this._nombre = nombre;
        this._edad = edad;
        this._profesion = profesion;

        
    }
    saludar(){
        if(typeof this._nombre.trim() === "string" && typeof this._edad === "number" && this._edad >= 0 && typeof this._profesion.trim() === "string"){
            console.log(`Hola soy ${this._nombre} , tengo ${this._edad} anios de edad , y mi profesion es ${this._profesion}`);
            

        }else{
            console.log(`no es un caracter valido , por favor verifique que sea una cadena de texto`);
            
        }
       

    }
    despedirse(){
         if(typeof this._nombre.trim() === "string" ){
            console.log(`adios ${this._nombre}`);
            

        }else{
            console.log(`Error:no es un caracter valido , por favor verifique que el nombre  sea una cadena de texto`);
            
        }

    }
}

const primeraPersona = new Persona ("Fernando" , 32 , "estudiante");
const segundaPersona = new Persona ("Maria" ,30 , "Tecnica en Esterilizacion")
primeraPersona.saludar();
segundaPersona.saludar();
segundaPersona.despedirse();
primeraPersona.despedirse();
