const arr = randomArr().sort((a, b) => a - b);

function randomArr() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 300));
    }
    return arr;
}

console.log(arr);

function binarySearch(arr, n) {
    let steps = 1;
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        if (n > arr[middle]) {
            min = middle + 1;
            steps++;
        } else if (n < arr[middle]) {
            max = middle - 1;
            steps++;
        } else if (n === arr[middle]) {
            console.log(arr[middle]);
            console.log("steps:", steps);
            return arr[middle];
        }
    }

    return -1;
}

binarySearch(arr, 298);
