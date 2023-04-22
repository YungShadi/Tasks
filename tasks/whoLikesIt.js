// function likes(names) {
//     if (names.length === 0) {
//         return "no one likes this";
//     } else if (names.length === 1) {
//         return `${names[0]} likes this`
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     }else if(names.length >= 4) {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     }
// };
function likes(names) {
    let result = ``;
    names.length === 0 ? result = `no one likes this` : 
    names.length === 1 ? result = `${names[0]} like this` : 
    names.length === 2 ? result = `${names[0]} and ${names[1]} like this`:
    names.length === 3 ? result = `${names[0]}, ${names[1]} and ${names[2]} like this` : 
    names.length >= 4 ? result =  `${names[0]}, ${names[1]} and ${names.length - 2} others like this`:
    result = `govno`
    return result;
};

console.log(likes(["Max", "John", "Mark"]));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));