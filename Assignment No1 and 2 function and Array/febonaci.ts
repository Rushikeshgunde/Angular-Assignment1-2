
function fibonaci(num: number): void{
    
    var num1: number = 1
    var num2: number = 1
    

    console.log(num1)
    while (num2 <= num) {
        
        console.log(num2)
        var temp = num1+num2
        num1 = num2
        num2=temp
    }
}

fibonaci(21)