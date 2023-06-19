function arrayToCsv(data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].some((element) => typeof element === "object") ||
      data[i].some((element) => typeof element === "symbol") ||
      (data[i].some((element) => isNaN(element)) &&
        !data[i].some((element) => typeof element === "string"))
    ) {
      throw new Error("Unexpected value");
    } else {
      const csvRow = data[i].map((element) => {
        if (
          typeof element === "string" &&
          (element.includes(",") ||
            element.includes("\n") ||
            element.includes('"'))
        ) {
          return `"${element.replace(/"/g, '""')}"`;
        }
        return element;
      });

      result += csvRow.join(",");

      if (i !== data.length - 1) {
        result += "\n";
      }
    }
  }
  return result;
}

console.log(arrayToCsv([[1, 'other "long" text']]));
// '1,2 a,b'
