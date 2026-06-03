// definicion de funcion
const x = function () {
    console.log("Hola mundo");
};

x();

// funcion declarativa
function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}

saludo("Naruto");

// FUNCIONES DE FLECHA
const imprimir = (nombre) => {
    console.log(`Hola ${nombre}`);
};

imprimir("Sasuke");

// estas funciones flecha son equivalentes
const cuadrado = (x) => { return x * x };
const cuadrado2 = y => x * x;

console.log(cuadrado(2));
console.log(cuadrado(4));
