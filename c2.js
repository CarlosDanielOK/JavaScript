console.log(Math.max(1, 4, 6, 9, 6, 4, 2)) // retorna el valor mas alto
console.log(Math.min(1, 2, 5, 9, 8, 0, 3)); // retorna el valor mas bajo
console.log(Math.min(2, 4) + 100); // 2 + 100 = 102

let num = 20

if (num < 10) {
    console.log("Menor");
} else if (num > 10) {
    console.log("Mayor");
} else {
    console.log("ERROR");
}

console.log(2 ** 10); // 2 elevado a 10

let contador = 0
while (contador <= 10) {
    console.log(contador);
    contador = contador + 1;
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}