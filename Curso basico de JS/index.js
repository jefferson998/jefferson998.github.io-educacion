console.log("Hola que mas ");

[1, 2, 3];
{
  nombre: "hola";
}

console.log(typeof "hol");

//para crear una rama

//git checkout --orphan rama
//git rm --cached -rf .
// funciones

// declarativas

function miFuncion() {
  return 3;
}
miFuncion();
//expresion, anonimas
var miFuncion = function (a, b) {
  return a + b;
};

miFuncion();

function saludarEstudiantes(estudiante) {
  console.log(estudiante);
}

saludarEstudiantes("Carlos");

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}
saludarEstudiantes("Carlos");

function sumar(c, d) {
  // var resultado = c + d;
  return c + d;
}

sumar(1, 2);

//scope es el alcance que tienen las variables

// global lo que esta en local no se puede llamar

// local lo que esta en global no se puede llamar

var miNombre = "Jefferson";
function nombre() {
  var miApellido = "Paz";
  console.log(miNombre + " " + miApellido);
}

nombre();

// miApellido es local
// miNombre es global

// Hoisting

// Las variables y las funciones
// se declaran antes de que se procese antes
// del codigo

// Ecmascript 5 Anterior
var nombreMama;
nombreMama = "Andrea";

// hoisting

var nombreMama = undefined;
console.log(nombreMama + "hoisting alerta");
nombreMama = "Andrea";

//hoisting funciones

hey();

function hey() {
  console.log("Hola" + nombreBrother);
}

var nombreBrother = "Andrea";

// coercion
// implicita
var a = 20;
var b = a + "";
typeof b;

// un tipo de valor a otro tipo
// explicita
// obligamos pasar de un tipo a otro
var c = String(a);
typeof c;
var d = Number(c);
typeof d;

// truthy
// algo verdadero

// falsy
// algo falso
Boolean();
// 0 false
// 1 verdadero
// null false
// NaN false
// undefined false
// false
// "caracter" verdadero
// [] verdadero
// {} verdadero
// function name(params) {} verdadero

// operadores
// +
// -
// *
// /
// + concatenacion
// ! negacion
// = asignacion
// == comparar valor
// === validando estrictamente
/* < menor  */
/*
&& y
|| o

> , <, >= <=
++ operador suma 1 
+= suma cualquier cantidad

*/

// if

/*



*/

if (true) {
  console.log("hola");
} else {
  console.log("soy falso");
}

if (false) {
  console.log("hola");
} else {
  console.log("soy falso");
}

var edad = 18;

if (edad === 18) {
  console.log("tu primera votacion");
} else if (edad > 18) {
  console.log("puedes seguir votando");
} else {
  console.log("aun no puedes votar");
}

// condition ? true:false;

var numero = 1;

var resultado = numero === 1 ? "si soy un uno" : "No, soy uno";

// reto

/*
opciones
cpu --- user
Piedra ---Piedra empate
Papel --- Papel
Tijera --- Tijera

Piedra  papel ususario gana
papel   tijera
tijera  piedra


*/
var opcionPiedra = "Piedra";
var opcionPapel = "Papel";
var opcionTijera = "Tijera";
var user;
var cpu;

var resultado = function (user, cpu) {
  if (user != undefined && cpu != undefined) {
    if (
      (user === opcionPiedra && cpu === opcionTijera) ||
      (user === opcionTijera && cpu === opcionPapel) ||
      (user === opcionPapel && cpu === opcionPiedra)
    ) {
      console.log("el usuario GANO");
    } else if (user === cpu) {
      console.log("empate");
    } else {
      console.log("la cpu GANO");
    }
  }
};
//switch validar casos
var numero = 1;
switch (numero) {
  case 1:
    console.log("Soy uno");
    break;
  case 10:
    console.log("soy un 10");
    break;
  default:
    console.log("no soy nada");
}

var question = prompt("Ingresa tu opcion: Piedra, Papel o Tijera");
var user = question.toLowerCase();

var options = ["piedra", "papel", "tijera"];

var cpu = options[Math.floor(Math.random() * 3)];

opcionPapel.toLowerCase();
opcionPiedra.toLowerCase();
opcionTijera.toLowerCase();
var resultado = function (user, cpu) {
  switch (true) {
    case (user === opcionPiedra && cpu === opcionTijera) ||
      (user === opcionTijera && cpu === opcionPapel) ||
      (user === opcionPapel && cpu === opcionPiedra):
      console.log(`el usuario GANO con ${user}`);
      break;

    case user === cpu:
      console.log(`Empate con ${cpu}`);
      break;
    default:
      console.log(`La máquina gana con ${cpu}`);
  }
};

resultado(user, cpu);

//array
var frutas = ["manzana", "platano", "cereza"];

console.log(frutas);

// frutas.length;
frutas[0];

// metodos para mutar
// agregar
var masFrutas = frutas.push("uvas");
// eliminar el ultimo
var ultimoDelete = frutas.pop("uvas");

// agregar al inicio
var addFirst = frutas.unshift("banano");
// eliminar al inicio
var deleteFirst = frutas.shift("banano");

// buscar posicion

var position = frutas.indexOf("platano");

// loops For y for of

var estudiantes = ["Carlos", "Maria", "Daniel"];

function saludarStudent(student) {
  console.log(`Hola, ${student}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarStudent(estudiantes[i]);
}

//nueva opcion for of
for (var student of estudiantes) {
  saludarStudent(student);
}

// loop while

while (estudiantes.length > 0) {
  console.log(estudiantes);
  var estudiante_while = estudiantes.shift();
  saludarStudent(estudiante_while);
}

//object

// var objeto = {};

var auto = {
  marca: "Toyota",
  modelo: "Corolla",
  year: "2020",
  // metodo
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.annio}`);
  },
};

auto.marca;

auto.detalleDelAuto();
