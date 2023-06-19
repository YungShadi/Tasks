function spinWords(string) {
  let splitString = string.split(` `);
  for (i = 0; i < splitString.length; i++) {
    if (splitString[i].length >= 5) {
      splitString[i] = splitString[i].split(``).reverse().join(``);
    }
  }
  return splitString.join(` `);
}
console.log(spinWords(`This is another test`));
