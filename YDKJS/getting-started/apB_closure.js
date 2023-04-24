function range(start, end) {
    function getRange(start, end) {
        let result = [];
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
        console.log(result);
        return result;
    }
    if (arguments.length === 2) {
        return getRange(start, end);
    } else {
        return function (end) {
            return getRange(start, end);
        };
    }
}

range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

var start3 = range(3);
var start4 = range(4);

start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []

start4(6); // [4,5,6]
