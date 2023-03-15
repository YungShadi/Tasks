function noSpace(x){
   let result = x.split(` `).join(``);
    return result;
}

console.log(noSpace(`12 2113 321`))