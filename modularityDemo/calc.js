function add(x, y) {
    console.log("The Addition is : ", x + y)
}

function sub(x, y) {
    console.log("The Subtraction is : ", x - y)
}

function mul(x, y) {
    console.log("The Multiplication is : ", x * y)
}

function div(x, y) {
    console.log("The Quotient is : ", x / y)
}

module.exports = {
    addition: add,
    subtraction: sub,
    multiplication: mul,
    division: div,
}