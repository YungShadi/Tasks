type T = string[] | string;
export function catMouse(x: string, j: number): any {
  const arrayFromString: T = x.split("");
  let noDot: T = [];

  let foundC = false;
  let foundD = false;
  for (let i = 0; i < arrayFromString.length; i++) {
    if (arrayFromString[i] === "C") {
      foundC = true;
    }
    if(foundC && arrayFromString[i] === "D" && ){
      
    }
    if (foundC) {
      noDot.push(arrayFromString[i]);
    }
  }
  return (noDot = noDot.length-2 > j ? "Escaped!" : "Caught!");
}

console.log(catMouse("...C....m", 3));
