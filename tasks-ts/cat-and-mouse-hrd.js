"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catMouse = void 0;
function catMouse(x, j) {
    var arrayFromString = x.split("");
    var filterArray = arrayFromString.filter(function (el) {
        var noDotArray = [];
        if (el === "C") {
            var indexC = arrayFromString.indexOf(el);
            return noDotArray = arrayFromString.slice(indexC);
        }
    });
    return noDotArray;
}
exports.catMouse = catMouse;
console.log(catMouse("...C....m", 3));
