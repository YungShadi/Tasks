"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catMouse = void 0;
function catMouse(x) {
    var numb = x.lastIndexOf(x[x.length - 1]) - x.indexOf(x[0]) - 1;
    return numb <= 3 ? "Caugth!" : "Escaped!";
}
exports.catMouse = catMouse;
console.log(catMouse("C..m"));
