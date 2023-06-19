
function strCount(str, letter) {
    let result = 0;
    for (i = 0; i < str.length; i++)
        if (str[i] === letter) {
            result++
        } return result
}
console.log(strCount(`yaeabiyee`, `e`))