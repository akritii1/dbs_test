var n=10;
var a=0,b=1;
var c=0;
console.log(a);
console.log(b);
for(var i=0;i<=n;i++)
{
	c=a+b;
	a=b;
	b=c;
	console.log(c);
}
