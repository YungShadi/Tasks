function swap (string) {
    let result = ``;
    for (i = 0; i< string.length; i++){
        if(string[i] === `a` || string[i] === `e` || string[i] === `i` || string[i] === `o` || string[i] === `u` ){
           result += string[i].toUpperCase();
        
        }else{
            result += string[i]
        }
    }return result
} 
console.log(swap(`Hello World`))