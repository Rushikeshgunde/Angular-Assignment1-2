

function maximum(arr: number[]): number{
    
    var largest = arr[0]

    for (var i = 1; i < arr.length; i++){
        if (arr[i] > largest) {
            
            largest= arr[i]
        }
        
    }
return largest

}

var arr: number[] = [23, 89, 6, 29, 56, 45, 77, 32]
var ret = 0
ret=maximum(arr)
console.log("the largest number is="+ret)