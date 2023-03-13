
function countSheeps(array1) {
    let count = 0;
    for (i = 0; i < array1.length; i++){
    if (array1[i] === true){
        count++;
    }
  
  }  return count;
}
let array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
console.log(countSheeps(array1))