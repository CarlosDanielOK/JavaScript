// 1. EXPRESIÓN DE FUNCIÓN (Function Expression)
// Se guarda una función anónima (sin nombre) dentro de una variable.
// Solo puede ejecutarse DESPUÉS de esta línea (no sufre "hoisting").
const x = function () {
    console.log("Hola mundo");
};

x();

// 2. DECLARACIÓN DE FUNCIÓN (Function Declaration)
// Se define explícitamente con un nombre. 
// JS las lee antes de ejecutar el código (hoisting), así que podrías
// llamar a saludo() incluso una línea arriba de donde fue declarada.
function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}

saludo("Naruto");

// 3. FUNCIONES DE FLECHA (Arrow Functions)
// Sintaxis moderna introducida en ES6 (2015). Es más corta, elimina
// la palabra "function" y usa una flecha "=>".
const imprimir = (nombre) => {
    console.log(`Hola ${nombre}`);
};

imprimir("Sasuke");

// Formas de acortar funciones flecha:
// Si solo tienen una instrucción, puedes quitar las llaves {} y se 
// hará un "return" automático de esa única línea de código.
// (Incluso puedes quitar los paréntesis si solo hay un parámetro).
const cuadrado = (x) => { return x * x };
const cuadrado2 = y => y * y; // Hace lo mismo que arriba pero súper resumido

console.log(cuadrado(2));
console.log(cuadrado(4));

// CLAUSURAS (CLOSURES)
// Piensa en una clausura como una función que sale de su casa con una "mochila".
// En la mochila guarda las variables de la función que la creó.

function crearMultiplicador(factor) {
    // Cuando esta función se ejecute y devuelva la función de adentro,
    // esa función de adentro se guardará "factor" en su mochila.
    return function (numero) {
        return numero * factor;
    }
}

// Creamos un multiplicador por 2 (factor = 2)
const elDoble = crearMultiplicador(2);
// elDoble ahora es una función con una mochila donde factor vale 2

// Creamos un multiplicador por 5 (factor = 5)
const elQuintuple = crearMultiplicador(5);
// elQuintuple ahora es una función con una mochila donde factor vale 5

console.log(elDoble(10)); // Imprime 20 (10 * 2)
console.log(elQuintuple(10)); // Imprime 50 (10 * 5)

// otro ejemplo con funciones flecha sobre clasuras
const cubo = (potencia) => {
    return (numero) => numero ** potencia;
}

const calcularCubo = cubo(3); // envia el valor que sera la potencia
console.log(calcularCubo(5)); // envia el numero a elevar por la potencia