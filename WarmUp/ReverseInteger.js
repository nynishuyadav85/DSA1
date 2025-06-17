function reverse(num) {
    let numCopy = num;
    num = Math.abs(num)
    let rev = 0;
    while (num > 0) {
        rem = num % 10;
        rev = (10 * rev) + rem
        num = Math.floor(num / 10);
    }
    return (numCopy < 0 ? - rev : rev)
}
let value = reverse(-123);
console.log(value)