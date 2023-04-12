let counter = 1;
function inner() {
    counter++;
    console.log(counter);
}
function outer() {
    let counter = 0;
    return inner;
}
const person1 = outer();
person1();
person1();
