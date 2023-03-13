


function maximum(arr: number[]): number{
    
    var max: number = 0
    
    var max2: number = 0
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max=arr[i]
        }

    }
    for (var j = 0; j < arr.length; j++){
        if (arr[j] > max2 && arr[j] != max) {
            max2=arr[j]
        }
            
    }
    return max2
}

var arr: number[] = [23, 89, 6, 29, 56, 45, 77, 32]

var maxnum: number = maximum(arr)

console.log(maxnum)