function fun1(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}
function fun2(n) {
    const sum = ((n + 1) * n) / 2;
    return sum;
}

let time1 = window.performance.now();
fun1(100000000);
let time2 = window.performance.now();
let time3 = window.performance.now();
fun2(100000000);
let time4 = window.performance.now();
const timeDiff1 = ((time2 - time1) / 1000).toFixed(30);
const timeDiff2 = ((time4 - time3) / 1000).toFixed(30);
console.log(`Time 1 ${timeDiff1}`);
console.log(`Time 2 ${timeDiff2}`);
