// [1,2,3] , [5,16,1,3];
const arr1 = [1, 2, 3];
const arr2 = [5, 16, 1, 3];

// NOTE for loop
// function arrIntersection(arr1, arr2) {
//     let arr = [];
//     let steps = 1;
//     for (let i of arr1) {
//         for (let j of arr2) {
//             if (i === j) arr.push(i);
//             steps++;
//         }
//     }
//     console.log(steps);
//     return arr;
// }

// NOTE Counter
function arrIntersection(arr1, arr2) {
    const arr = [];
    const arr3 = arr1.concat(arr2);
    let counter = {};
    let steps = 1;
    for (let i of arr3) {
        if (!counter[i]) {
            counter[i] = 1;
        } else arr.push(i);

        steps++;
    }
    console.log(steps);
    return arr;
}

console.log(arrIntersection(arr1, arr2));
