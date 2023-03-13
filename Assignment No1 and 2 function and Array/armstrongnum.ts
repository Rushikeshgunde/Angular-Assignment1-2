


function chkArmstrong(num: number): void{
    

    var x :number = num

    var ans = 0
    
    while (x > 0) {
        var reminder = x % 10
        reminder = reminder * reminder * reminder
        ans = ans + reminder 
        x= x/10
    }
    if (ans == num) {
        console.log("it is Armstrong number")
    } else {
        console.log("it is not Armstrong number")
    }
}

var Arm = 153
chkArmstrong(Arm)