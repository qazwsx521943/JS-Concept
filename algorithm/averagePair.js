function averagePair(arr, num) {
    let pair = [];
    let count = 0;
    for (let [keyi, valuei] of arr.entries()) {
        for (let j = keyi + 1; j < arr.length; j++) {
            console.log(valuei, arr[j]);
            count++;
            if (valuei + arr[j] === 2 * num) {
                pair.push([valuei, arr[j]]);
            }
        }
    }
    console.log("steps:", count);
    console.log(pair);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr1 = [-11, 0, 1, 2, 3, 9, 14, 17, 21];
averagePair(arr, 4);
averagePair(arr1, 1.5);
