function removeDuplicate(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {
            x = x + 1;
            arr[x] = arr[i];
        }
    }
    return x+1;
}
let arr = [1, 1, 2]

let value = removeDuplicate(arr)
console.log(value)