var a= parseInt(prompt("Enter The Number"))
var n1=0,n2=1,next;
console.log(n1);
console.log(n2);

next= n1+n2;
while(next<=a){
    console.log(next);
    n1=n2;
    n2=next;
    next=n1+n2;
}