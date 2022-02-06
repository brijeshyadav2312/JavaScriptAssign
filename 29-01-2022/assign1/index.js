var a=prompt("Enter The string");
a=a.split("");
var Count=0;
for(var i=0; i<=a.length; i++){
    if (a[i]=='a' || a[i]=='A' || a[i]=='e' || a[i]=='E' || a[i]=='i' || a[i]=='I' || a[i]=='o' || a[i]=='O' || a[i]=='u' || a[i]=='U'){
        Count +=1;
    }
}
console.log(Count)