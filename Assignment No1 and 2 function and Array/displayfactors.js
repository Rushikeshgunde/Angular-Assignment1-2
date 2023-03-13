function displayfactor(n) {
    for (var i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
}
var factorial = 20;
displayfactor(20);
