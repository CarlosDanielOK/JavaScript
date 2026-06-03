for (let i = 1; i <= 100; i++) {
    let salida = "";
    if (i % 3 == 0) {
        salida += "Fizz";
    }
    if (i % 5 == 0) {
        salida += "Buzz";
    }
    console.log(salida || i);
}