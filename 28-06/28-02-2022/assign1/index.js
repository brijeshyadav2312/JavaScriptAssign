function fizzbuzz(){
    var a=prompt("enter number")
    if(isNaN(a))
    alert("please enter valid number");
    else
    for(i=1; i<=a; i++){
        if(i%15==0)
        document.write("FizzBuzz"+"&nbsp; &nbsp;");
        else if (i%3==0)
        document.write("Fizz"+"&nbsp; &nbsp;");
        else if (i%5==0)
        document.write("Buzz"+"&nbsp; &nbsp;");
        else
        document.write(i+"&nbsp; &nbsp;")
    }
}
