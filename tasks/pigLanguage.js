function pigIt(str){
  const splitStr = str.split(' ');
  let result = '';
  let pigArr = new Array
    for (i = 0; i < splitStr.length; i++){
      let splitStrWord = splitStr[i].split('');
      let letterToPush = splitStrWord[0];
      splitStrWord.push(letterToPush);
      splitStrWord.shift();
      pigArr += splitStrWord.join('') + 'ay ' ;
      result = pigArr.slice(0,-1)
      if(str[str.length - 1] == '!' || str[str.length - 1] == '?'){
        result = pigArr.slice(0,-3)
      }
    }
    return result
}
console.log(pigIt('Ya ne gay !'));