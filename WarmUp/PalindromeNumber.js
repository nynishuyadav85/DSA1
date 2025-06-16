function isPalindrome(num) {
    let numCopy = num;
    let rev = 0;
    if (num < 0) return false;
    while (num > 0) {
        let rem = num % 10;
        rev = (10 * rev) + rem
        num = Math.floor(num / 10);
    }
    // if (rev === numCopy) {
    //     return true
    // } else {
    //     return false
    // };
    return rev === numCopy;
}


let result = isPalindrome(121)
console.log(result)