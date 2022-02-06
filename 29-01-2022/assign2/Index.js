var num=prompt("Enter a number");
num=parseInt(num);
if(isNaN(num)){
    alert("Please enter a valid number");
} else{ 
    var count=0;
    for(var i=1; i<=num ;i++){

        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
            console.log(i);
        }
    }
}