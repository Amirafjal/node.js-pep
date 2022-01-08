function add(a, b) {
    console.log("the sum is ", a + b)
}

function sub(a, b) {
    console.log("the difference is ", a - b)
}

function mul(a, b) {
    console.log("the multiply is ", a * b)
}

function div(a, b) {
    console.log("the quotient is ", a / b)
}

module.exports = {
    addition: add,
    subtract: sub,
    multiply: mul,
    division: div,
}
