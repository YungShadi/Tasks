function zero(callback) {
    return callback ? callback(0) : 0
}
function one(callback) {
    return callback ? callback(1) : 1
}
function two(callback) {
    return callback ? callback(2) : 2
}
function three(callback) {
    return callback ? callback(3) : 3
}
function four(callback) {
    return callback ? callback(4) : 4
}
function five(callback) {
    return callback ? callback(5) : 5
}
function six(callback) {
    return callback ? callback(6) : 6
}
function seven(callback) {
    return callback ? callback(7) : 7
}
function eight(callback) {
    return callback ? callback(8) : 8
}
function nine(callback) {
    return callback ? callback(9) : 9
}

function plus(num) {
    return function (v) {
        return v + num
    }
}
function minus(num) {
    return function (v) {
        return v - num
    }
}
function times(num) {
    return function (v) {
        return v * num
    }
}
function dividedBy(num) {
    return function (v) {
        return Math.floor(v / num)
    }
}

console.log(zero(minus(one())));