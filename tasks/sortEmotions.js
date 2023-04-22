// нужно сравнивать эоцию из массива с позицией ее в обьекте и как-то ее выводить на нужную

function sortEmotions(arr, order) {
  let massive = new Array()
  const emotions = [
    { emotion: ":D", weight: 10 },
    { emotion: ":)", weight: 12 },
    { emotion: ":|", weight: 13 },
    { emotion: ":(", weight: 14 },
    { emotion: "T_T", weight: 15 }
  ]
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < emotions.length; j++) {
      let elementPos = emotions.map(function (x) { return x.id; }).indexOf(j);
      let valueByPos = emotions.at(elementPos + 1);
      if (arr[i] === valueByPos);
        massive.unshift(arr[i]);
    }
  } return massive;
};
console.log(sortEmotions([':D', 'T_T', ':D', ':('], true));
console.log(massive);





