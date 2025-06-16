function countDigit(num) {
    let count = 0;
    if (num == 0) return 1
    num = Math.abs(num)
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

let num = -123444;

let value = countDigit(num)

console.log(value)