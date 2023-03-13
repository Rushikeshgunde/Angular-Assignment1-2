


function displayfactor(n: number):void{
    for (var i = 1; i <= n / 2; i++){
        
        if (n % i == 0) {
            console.log(i)
        }
    }
    
}

var factorial: number = 20
displayfactor(20)