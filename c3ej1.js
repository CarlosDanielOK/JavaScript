function minimo(x, y) {
    if (x < y) {
        return x;
    } else if (y < x) {
        return y;
    } else {
        return x;
    }
};

const minimo2 = (x, y) => {
    if (x < y) {
        return x;
    } else if (y < x) {
        return y;
    } else {
        return x;
    }
};

const minimo3 = function (x, y) {
    if (x < y) {
        return x;
    } else if (y < x) {
        return y;
    } else {
        return x;
    }
};

console.log(minimo(0, 10));
console.log(minimo2(0, -10));
console.log(minimo3(1, -1));