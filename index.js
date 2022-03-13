const { prototype } = require("mocha");

//console.log(num1 + num2) is not necessary here
function add(num1, num2) {
    //console.log(num1 + num2)
    return num1 + num2
}

add(1, 2);
//console.log(add(1, 2));

function subtract(num1, num2) {
    console.log(num1 - num2)
    return num1 - num2
}

subtract(2, 1);
//console.log(subtract(1, 2));

function multiply(num1, num2) {
    console.log(num1 * num2)
    return num1 * num2
}

multiply(1, 2);
//console.log(multiply(1, 2))

function divide(num1, num2) {
    //console.log(num1 / num2)
    return num1 / num2
}

divide(2, 1)
//console.log(divide(2, 1))

/* function increments a (num) by 1 using += and is returned
increment() is called and runs function*/
function increment(num) {
    //console.log(num += 1)
    return (num += 1)
}
increment(5);

function decrement(num) {
    //console.log(num -= 1)
    return (num -= 1)
}
decrement(3);

function makeInt(num1,) {
    return parseInt(num1, 10)
}

makeInt("1", 10)

function preserveDecimal(num1,) {
    return parseFloat(num1)
}

preserveDecimal("1.212")