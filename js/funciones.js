//Funciones

/*

Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro
código de JS, esto aplica tanto para variables como para funciones.

Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es
mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables 
declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.

*/

// Funciones, invocación y declaracióm

//Declaración de una función

/*

palabra reservada - function

nombre de la funcion - nombreFuncion
establecer parametros -recibe de 0 a n parametros y se encasillan
dentro un paréntesis ()

establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar

Hoisting

https://developer.mozilla.org/es/docs/Glossary/Hoisting


Scope: Hace referencia al concepto que hace referencia al alcance que 


var x = 9;
const a =  x;

El valor asignado se queda como la variable x y no puede ser reasignado luego ese valor.

*/

/*

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.

https://developer.mozilla.org/es/docs/Glossary/Scope


var x;
const a =  x;


https://www.w3schools.com/js/js_scope.asp
https://www.w3schools.com/js/js_hoisting.asp

*/
//Ejemplo de función que no retorna ningun valor.


function ejemploFuncion(){
    console.log("Buenos Dias");
}
ejemploFuncion();


//Ejemplo de función que si retorna un valor 
var nombre = "Max";

function holaMundo(nombre){
    return "Hola " + nombre;
}

console.log(holaMundo(nombre));


/*
Elaborar una función que calcule la velocidad de un objeto.

*/

//Se puede asignar el valor dentro de la definición de los parametros, pero si recibe otros los remplaza Ejemplo: calcularVelocidad(23, 13) impirme 'La velocidad es: 1.7692307692307692 m/s por hora.'

function calcularVelocidad(distancia = 36, tiempo = 2){

    let velocidad = distancia/tiempo; // Forma 1
    return "La velocidad es: " + velocidad + " m/s por hora."

    //Forma 2
    // return "La velocidad es: " + distancia/tiempo + " m/s por hora."
}


console.log(calcularVelocidad());

// Funciones dentro de JS

/*

///Funciones flecha  | Fat arrow   | Funciones lambda
Son una manera mas compacta  y sencilla de escribir una función nomral. 

No son lo mismo que una función general, se utiliza en otro tipo de contextos funciones callback que requieren funciones anonimas. 
Su uso es limitado. 

////////////

Funciones anonimas
Funciones CallBack - Que recoben otras funciones como parametros

Promesas

Funciones async - await

*/


/* Declaración de una función flecah
    
    var, let, const

    const - buena práctica utilizar const para declarar funciones flecha o lambda.

    -nombreFuncion
    -Parámetros
    -Esblecer el bloqueo de código o procesos que va a ejecutar esta función.

    => - Fat arrow-

*/
function funcionNormal (parametro){
    return "Hola " + parametro; 
}
//Función Flecha

const funcionFlecha = parametro => "Hola " + parametro;

//Función Flecha con mas parametros
const funcionVariosParamentros = (datoA, datoB) => {
    let datoC = datoA + datoB;
    return"La suma de DatoA y dato B es: "+ datoC;
} 

//Funciones flecha sin recibir un parametro
const funcionSinParametros = () =>{
    return "Función flecha que no reciben funcionSinParametros." 
}

////////////////////////////////

// Función flecha para calcular la velocidad

const calcularVelocidadFlecha =(distancia, tiempo) =>{
    console.log("La Distancia es: " + distancia);
    console.log("El tiempo es: " + tiempo);
    return "La velocidad es: " + distancia/tiempo + " m/s por hora."

}

// Ejercicios

/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/

console.log("Prueba concatenar  prin cn una función: "  + cuadrado(23));

// 1. Calcular el cuadrado de un número.

function cuadrado (numero){
    return "El cuadrado del numero " + numero +" es " + numero**2; 
}

const cuadradoFlecha =(numero) =>"El cuadrado del numero " + numero +" es " + numero**2; 


// 2. Escribir un código que convierta de grados celsius a grados fahrenheit 
function celsiusFahrenheit (celsius){
    return  celsius + " grdados celsius es igual a " + celsius*9/5+32 + " grados fahrenheit"; 
}

const celsiusFahrenheitFlecha =(celsius) => celsius + " grados celsius es igual a " + celsius*9/5+32 + "grados fahrenheit"; 

//3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.

function calcularVoltaje (resistencia, corriente){
    return "El volaje es: " + corriente/resistencia; 
}

const calcularVoltajeFlecha =(resistencia, corriente) => "El volaje es: " + corriente/resistencia; 


//4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.

function cubo (numero){
    return "El cubo del numero "+numero+ " es: " + numero**3; 
}

const cuboFlecha =(numero) => "El cubo del numero "+numero+ " es: " + numero**3; 

//5. Calcular el área de un triángulo

function areaTriangulo (base, altura){
    return "El area del triangulo es:  " + base*altura/2; 
}

const areaTrianguloFlecha =(numero) => "El area del triangulo es:  " + base*altura/2; 


//6. Calcular el volumen de una esfera

function volumenEsfera (radio){
    pi = 3.1416;
    return "El radio de la esfera es:  " + 3/4*radio**3*pi; 
}

const volumenEsferaFlecha =(radio) =>{
    pi = 3.1416;
    return "El radio de la esfera es:  " + 3/4*radio**3*pi; 
}

//7. Convertir una cadena de texto a mayúsculas, usando el método toUpperCase()

function mayuscula (texto){
    return "Tu nuevo texto es: " + texto.toUpperCase(); 
}

const mayusculaFlecha =(texto) => "Tu nuevo texto es: " + texto.toUpperCase(); 

