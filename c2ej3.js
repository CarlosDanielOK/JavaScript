let size = 8;
let cadena = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            cadena += " ";
        } else {
            cadena += "#";
        }
    }
    cadena += "\n";
}

console.log(cadena);