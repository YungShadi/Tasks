var isPalindrome = function (string) {
    const stringToCheck = string.replace(/[^a-z0-9]/gi, '').toLowerCase()
    if (stringToCheck === stringToCheck.split('').reverse().join('')) return true
    return false
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));