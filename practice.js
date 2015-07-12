var arr1 = ["1", "2", "3", "4", "5"];

function mapForEach(arr1, fn) {
    
    var total = 0;
    for (var i = 0; i < arr1.length; i++) {
        total += (
            fn(arr1[i])
        )
    };
    
    return total;k
}


console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    console.log(item);
    return parseInt(item);
});

console.log(arr2);