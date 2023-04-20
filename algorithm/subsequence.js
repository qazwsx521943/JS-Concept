function isSubsequence(str1, str2) {
    let min = 0;
    let str2Arr = str2.split("");
    let max = str2Arr.length - 1;
    for (let i of str1.split("")) {
        while (i !== str2Arr[min]) {
            if (min === max) {
                console.log(`${str1} is not Subsequene of ${str2}`);
                return false;
            }
            min++;
        }
        min++;
    }
    console.log(`${str1} is Subsequene of ${str2}`);
    return true;
}
isSubsequence("book", "brooklyn");
isSubsequence("abc", "bac");
isSubsequence("abcd", "bddddddabcdddasaasdf");
