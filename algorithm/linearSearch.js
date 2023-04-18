const arr = randomArr();

function randomArr() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 50));
    }
    return arr;
}

function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            console.log("found number " + n + " at index " + i);
            return i;
        }
    }
    console.log("found no match");
    return -1;
}
linearSearch(arr, 33);
