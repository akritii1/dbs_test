class myclass
{
data : number=30;
constructor()
{
console.log("This is Constructor");
}
getData() : number
{
return this.data;
}
}
var obj=new myclass;
console.log("data is "+obj.getData());

