


function summation(arr: number[]): number{
    
    var counter:number = 0
    
    var sum : number = 0
    for (counter = 0; counter < arr.length; counter++){
        sum= sum+ arr[counter]
        
        
    }
return sum
}

var arr: number[] = [23, 6, 7, 4, 5, 7]
var sum = 0
sum=summation(arr)
console.log("summation is" + sum)

//output is 52.