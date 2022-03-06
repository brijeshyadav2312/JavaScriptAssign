function passmatch(){
    var inp1=parseInt(document.getElementById("password1").value);
    var inp2=parseInt(document.getElementById("password2").value);
    if (inp1==inp2)
    alert("Password Successfully Matched");
    else
    alert("Password Not Matched Please Enter Again");

}