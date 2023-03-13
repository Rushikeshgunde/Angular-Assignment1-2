function summation(arr) {
    var counter = 0;
    var sum = 0;
    for (counter = 0; counter < arr.length; counter++) {
        // sum= sum+ arr[counter]
        counter++;
    }
    return sum;
}
var arr = [23, 6, 7, 4, 5, 7];
var sum = 0;
sum = summation(arr);
console.log("summation is" + sum);
//output is 52.
