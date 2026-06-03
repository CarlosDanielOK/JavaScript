let size = 8;
let caracteres = "";

for (let fila = 0; fila < size; fila++) {
    for (let columna = 0; columna < size; columna++) {
        if ((fila + columna) % 2 == 0) {
            caracteres += " ";
        } else {
            caracteres += "#";
        }
    }
    caracteres += "\n";
}

console.log(caracteres);

/*
filas + columnas = resultado
0 + 0 = 0 PAR " "
0 + 1 = 1 IMPAR "#"
0 + 2 = 2 PAR
0 + 3 = 3 IMPAR

1 + 0 = 1 IMPAR "#"
1 + 1 = 2 PAR " "
1 + 2 = 3 IMPAR
1 + 3 = 4 PAR

2 + 0 = 2 PAR " "
2 + 1 = 3 IMPAR "#"
2 + 2 = 4 PAR
2 + 3 = 5 IMPAR
*/