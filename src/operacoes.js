function sum(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um número';
    }

    return num1 + num2
}

function sub(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um número';
    }

    return num1 - num2
}

function mult(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um número';
    }

    return num1 * num2
}

function div(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um número';
    }

    return num1 / num2
}

function pot(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um número';
    }

    return num1 ** num2
}

function raiz(num1) {
    if(isNaN(num1)) {
        throw 'Não é um número';
    }

    return num1 = Math.sqrt(num1)
}


module.exports = {
    sum,
    sub,
    mult,
    div,
    pot,
    raiz
}