function bandNameGenerator (str) {
    let strChar0 = str.charAt(0);
    let strCharLast = str.charAt(str.length-1);
 if (strChar0 === strCharLast){
   return str.charAt(0).toUpperCase() + str.slice(1) + str.slice(1)
 } else if (str.charAt(0) !== str.charAt(-1)){
    return `The ${str.charAt(0).toUpperCase()}${str.slice(1)}`
 }
}
console.log(bandNameGenerator(`knifk`))