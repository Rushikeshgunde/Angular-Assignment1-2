function maximum(arr) {
    var max = 0;
    var max2 = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > max2 && arr[j] != max) {
            max2 = arr[j];
        }
    }
    return max2;
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var maxnum = maximum(arr);
console.log(maxnum);
