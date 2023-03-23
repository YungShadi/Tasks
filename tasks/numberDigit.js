function checkDigit(number, index1, index2, digit) {
  let numberStr = number.toString();
  let digStr = digit.toString();
  let ind1 = index2;
  let ind2 = index1;
  if(index2 < index1){
    ind1 = index2;
    ind2 = index1;
  }else{
    ind1 = index1;
    ind2 = index2;
  }
  let i = ind1;
  while(i <= ind2 ){
    if(numberStr[i] === digStr){
      return true;
    }
    i++
  }
return false;
}
console.log(checkDigit(1234567, 1, 0, 1))

// function checkDigit(number, index1, index2, digit) {
//   number = number.toString();
//   let sum = 1
//   if (index2 - index1 < 0) {
//     sum = -1
//   }
//   for (let i = index1; i <= index2; i += sum){
//     console.log(number[i], digit)
//     if (number[i] == digit) {
//       return true
//     }
    
//   }
// };
