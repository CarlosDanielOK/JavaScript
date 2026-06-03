let size = 5;
let caracter = "";

for (let fila = 1; fila <= size; fila++) {
    for (let columna = 1; columna <= size / 2; columna++) {
        if (fila % 2 == 0) {
            caracter += "# ";
        } else {
            caracter += " #";
        }
    }
    caracter += "\n";
}
console.log(caracter);