class Persona{
    constructor(nombre,edad,dni,sexo,peso,altura,anioDeNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioDeNacimiento = anioDeNacimiento;
        this.mostrarGeneracion = function(){
            if(anioDeNacimiento >= 1930 && anioDeNacimiento <= 1948){
                document.write("<br>" +this.nombre + " eres parte de la Silent Generation, y tu rasgo caracteristico es la austeridad.<br>");
            }else if(anioDeNacimiento >= 1949 && anioDeNacimiento <= 1968){
                document.write("<br>" +this.nombre +" eres parte de la generacion Baby Boom, y tu rasgo caracteristico es la ambicion.<br>");

            }else if (anioDeNacimiento >= 1969 && anioDeNacimiento <= 1980){
                document.write("<br>" +this.nombre +" eres parte de la generacion X, y tu rasgo caracteristico es la obsesión por el éxito.<br>")

            }else if (anioDeNacimiento >= 1981 && anioDeNacimiento <= 1993){
                document.write("<br>" +this.nombre +" eres parte de la generacion Y, un verdadero millennials y tu rasgo caracteristico es frustracion.<br>")

            }else{
                document.write("<br>" +this.nombre +" eres parte de la generacion Z,  y tu rasgo caracteristico es la irreverencia.<br>")

            }



        };
        this.esMayorDeEdad = function(){
            if(edad >= 18){
                alert("La persona es mayor de edad")
            }else{
                alert("la persona es menor de edad")
            }

        };
        this.mostrarDatos = function(){
             document.write(`<br>Nombre: ${this.nombre} <br>Edad: ${this.edad} <br>DNI: ${this.dni}<br>Sexo: ${this.sexo} <br>Peso: ${this.peso}<br>Altura: ${this.altura}<br>Año de nacimiento: ${this.anioDeNacimiento}<br>`);

        };
        this.generarDni = function(){
            num = Math.floor( ( Math.random() * 100000000 ) );
            sNum = formatNumberLength( num, 8 );
            return sNum + charDNI( sNum );

        };



    }

}


let persona1 = new Persona ('Daniel Bevilaqcua',40,29789987,'H',101,1.78,1932)
let persona2 = new Persona ('Bruno Bevilaqcua',41,29789447,'H',95,1.78,1996)
let persona3 = new Persona ('German Berra',37,31541941,'H',101,1.93,1985)

// persona1.mostrarGeneracion();
// persona2.mostrarGeneracion();
// persona3.mostrarGeneracion();
// persona3.mostrarDatos();