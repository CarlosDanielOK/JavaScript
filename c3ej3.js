const countBs = (cadena) => {
    let cantidad = countChar(cadena, "B");
    return cantidad;
}

const countChar = (cadena, caracter) => {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == caracter) {
            contador++;
        }
    }
    return contador;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));