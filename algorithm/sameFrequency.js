function sameFrequency(str1, str2) {
    let obj1 = {},
        obj2 = {};
    for (let char of str1.split("")) {
        if (!obj1[char]) {
            obj1[char] = 1;
        } else obj1[char]++;
    }
    for (let char of str2.split("")) {
        if (!obj2[char]) {
            obj2[char] = 1;
        } else obj2[char]++;
    }
    console.log(obj1);
    console.log(obj2);

    for (let property in obj1) {
        if (obj1[property] !== obj2[property]) return -1;
    }
    console.log("same!!");
    return true;
}

sameFrequency("abcddd", "dddcbab");
