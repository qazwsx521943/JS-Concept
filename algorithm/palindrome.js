// NOTE O(n)  solve by pointer instead of using for loop O(n^2)
function palindromeCheck(str) {
    let strToArr = str.split("");
    let min = 0;
    let max = strToArr.length - 1;
    while (min <= max) {
        if (strToArr[min] === strToArr[max]) {
            console.log(strToArr[min], strToArr[max]);
            min++;
            max--;
        }
        if (strToArr[min] !== strToArr[max]) {
            console.log("not a Palindrome!!");
            return false;
        }
    }
    console.log("Palindrome!!");
    return true;
}

palindromeCheck("awesome");
palindromeCheck("foobar");
palindromeCheck("tacocat");
