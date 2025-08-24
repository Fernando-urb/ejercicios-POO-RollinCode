// Libros - Dificultad:  🟢🟡🔴
// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad.
//  Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”


class Libro {
    #isbn;
    #titulo;
    #autor;
    #numeroDePaginas
    constructor(isbn ,titulo ,autor ,numeroDePaginas) {
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numeroDePaginas = numeroDePaginas;
        
        
    }
    get mostrarIsbn(){
        return this.#isbn;
    }
     get mostrarTitulo(){
        return this.#titulo;
    }
     get mostrarAutor(){
        return this.#autor;
    }
     get mostrarIsbn(){
        return this.#numeroDePaginas;
    }
    set generarIsbn(isbn){
        this.#isbn = isbn;
       
    }
     set generarTitulo(titulo){
        this.#titulo = titulo
       
    }
     set generarAutor(autor){
        this.#autor = autor
       
    }

     set generarNumeroDePaginas( numeroDePag){
        this.#numeroDePaginas = numeroDePag
       
    }
    mostrarLibro(){
        console.log(`El libro ${this.#titulo}  con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene ${this.#numeroDePaginas} páginas `);
        

    }
}

const miLibro = new Libro (9789500711067,"Cien años de soledad","Gabriel García Márquez",394)
miLibro.mostrarLibro()