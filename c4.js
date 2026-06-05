let nombre = "sasuke";
console.log(nombre.toUpperCase());

// ARRAYS
let secuencia = [1, 2, 3, 4];
// El método push agrega valores al final de un array
secuencia.push(5);
secuencia.push(7);
console.log(secuencia);
// El método pop elimina el último valor en el array y lo devuelve
console.log(secuencia.pop());
console.log(secuencia);

// OBJETOS
let objeto = {
    nombre: "Naruto",
    numeros: [1, 2, 3, 4],
    // las propiedades cuyos nombres no son nombres de enlace válidos o números válidos deben ir entre comillas
    "nombre no valido": "Prueba de nombre",
};

console.log(objeto.nombre);
console.log(objeto.numeros);
console.log(objeto["nombre no valido"]);

// Es posible asignar un valor a una expresión de propiedad con el operador =.
// Esto reemplazará el valor de la propiedad si ya existía o creará una nueva propiedad en el objeto si no existía.
console.log(objeto.apellido); // retorna undefined porque la propiedad no existe todavia
objeto.apellido = "Uzumaki"; // crea una nueva propiedad dentro del objeto
console.log(objeto.apellido);

// El operador delete es un operador unario que cuando se aplica a una propiedad de un objeto
// eliminará la propiedad nombrada del objeto.
delete objeto["nombre no valido"];
console.log(objeto["nombre no valido"]); // retornara undefined ya que eliminamos la propiedad
delete objeto.numeros;
console.log(objeto.numeros); // tambien retornara undefined ya que eliminamos la propiedad

// El operador binario in, cuando se aplica a una cadena y a un objeto, te dice si ese objeto tiene una propiedad con ese nombre.
// Si la propiedad ya no está presente in devolverá false, si esta presente devolvera true.
console.log("nombre no valido" in objeto); // false
console.log("numeros" in objeto); // false
console.log("nombre" in objeto); // true

// La función Object.keys devolverá un array de cadenas con todos los nombres de las propiedades del objeto
console.log(Object.keys(objeto));
console.log(Object.keys({ x: 1, y: 2, z: 3 }));

// La función Object.assign copia todas las propiedades de un objeto en otro
let objeto1 = {
    nombre: "Sasuke",
    apellido: "Uchiha",
};

let objeto2 = {
    edad: 15,
    pais: "Konoha",
};

console.log(objeto1);
console.log(objeto2);

Object.assign(objeto1, objeto2); // copia todas las propiedades del objeto2 a objeto1
console.log(objeto1);