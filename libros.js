//Crear un constructor de libros
// Propiedades de Libro : ISBN, Titulo, Autor, Número de páginas, Editorial, formato
// Métodos de Libro: Mostrar información
// instanciar 6 objetos de tipo libro de distinto formato

//Crear un constructor de lectores 
// Propiedades de Lector: Nombre, Apellido, Fecha de nacimiento, Género, Número de teléfono, Dirección
// Métodos de Lector: Leer, calificar, formatoPreferido
// instanciar 3 objetos de tipo lector, el primero va a preferir leer en formato fisico


function Libro(ISBN, titulo, autor, numeroDePaginas, editorial, formato){
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroDePaginas = numeroDePaginas;
    this.editorial = editorial;
    this.formato = formato;
    //metodo para mostrar informacion del libro 
    this.mostrarInformacion = function() {console.log("ISBN: " + this.ISBN + " titulo: " + this.titulo + " Autor: " + this.autor + 
    " Numero de paginas: " + this.numeroDePaginas + " Editorial: " + this.editorial + " Formato: " + this.formato  )}
}

const libro01 = new Libro (1234, "Harry potter", "JR", 500, "magia", "fisico");
const libro02 = new Libro (1235, "Principito", "Pedro", 408, "magia", "fisico");
const libro03 = new Libro (1236, "Rayuela", "Len", 120, "Fun", "digital");
const libro04 = new Libro (1237, "Mario y Luigi", "Nintendo", 150, "aventura", "audio libro");
const libro05 = new Libro (1238, "Senior de los anillos", "JR", 1000, "aventura", "audio libro");
const libro06 = new Libro (1239, "Game of thrones", "JR", 800, "dragones", "digital");

function Lectores(nombre, apellido, fechaDeNacimiento, genero, numeroDeTelefono, direccion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.genero = genero;
    this.numeroDeTelefono = numeroDeTelefono;
    this.direccion  = direccion;
}

const lector01 = new Lectores ("Jose", "Potter", "25/07/1990", "Masculino", 123456, "Cordoba");
const lector02 = new Lectores ("Camila", "Perez", "12/01/1995", "Femenino", 123458, "Corrientes")

//libro01.mostrarInformacion();