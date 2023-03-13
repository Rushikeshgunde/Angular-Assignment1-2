

function chkprime(num1: number): void{

    for (var i = 2; i < num1; i++){
        
        if (num1 % 2 == 0) {
            console.log("not a prime number")
            
        }
        else {
            console.log("it is a prime number") 
            break
        }
    }
    
}

var num1: number = 11
chkprime(num1)


