function fibonaci(num) {
    var num1 = 1;
    var num2 = 1;
    console.log(num1);
    while (num2 <= num) {
        console.log(num2);
        var temp = num1 + num2;
        num1 = num2;
        num2 = temp;
    }
}
fibonaci(21);
