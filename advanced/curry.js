function sum(a, b, c) {
    return a + b + c;
}
const sumCur = (a) => (b) => (c) => a + b + c;
const add2 = sumCur(2);
const add3 = add2(3);
console.log("test easy curry:", add3(5), add3(10));

// console.log(sum(2, 3, 5));

// function curry(cb) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return cb(a, b, c);
//             };
//         };
//     };
// }
const curry = (cb) => (a) => (b) => (c) => cb(a, b, c);

const sumCurried = curry(sum);
console.log(sumCurried(3)(2)(5));

const test = sumCurried(3);
console.info("curry", test);
function salary(months, base) {
    return months * base;
}

const curriedSalary = (months) => (base) => months * base;
const monthCount14 = curriedSalary(14);
const total = monthCount14(35000);
console.log("年薪：", total);
