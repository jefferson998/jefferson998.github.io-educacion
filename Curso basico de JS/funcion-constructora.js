//funcion constructora

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}
// genera new
var autoNuevo = new auto("Tesla", "Model 3", 2020);

var autoNuevo2 = new auto("Tesla", "Model X", 2018);

var cantidadAutos = prompt("Ingrese cantidad de autos a listar");
var autos = [];

for (var i = 0; i < cantidadAutos; i++) {
  var marca = prompt("Ingresa la marca del auto #" + Number(i + 1) + ":");
  marca.toString();
  var modelo = prompt("Ingresa el modelo del auto # " + Number(i + 1) + ":");
  modelo.toString();
  var annio = prompt("Ingresa el año del auto #" + Number(i + 1) + ":");
  annio.toString();
  autos.push(new auto(marca, modelo, annio));
}

for (var auto of autos) {
  console.log(auto);
}

// for (var i = 0; i < autos.length; i++) {
//   console.log(autos[i]);
// }

// Array

var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "book", costo: 300 },
  { nombre: "celular", costo: 4200 },
  { nombre: "audifonos", costo: 100 },
];

// filter

var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

// map

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

var findArticulos = articulos.find(function (articulo) {
  return articulo.nombre === "audifonos";
});

//regresa el nombre o lista
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

// some validacion

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 1000;
});

// metodo splice

/*
var frutas =["manzana","pera","banano"]

frutas.splice(posicion de inicio, numero de elementos)
frutas.splice(0,1)
elemetos eliminados en otro array ["manzana"]
nuevo array 
["pera","banano"]


Fundamentos de JavaScript
V8 y el navegador
ECMAScript 6+


*/
